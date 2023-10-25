import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { logUserOut } from '../apollo';
import { gql, useQuery } from '@apollo/client';
import { PHOTO_FRAGMENT, COMMENT_FRAGMENT } from '../fragments';
import ScreenLayout from '../components/ScreenLayout';
import Photo from '../components/Photo';
import React, { useState } from 'react';

const FEED_QUERY = gql`
  query seeFeed($offset: Int!) {
    seeFeed(offset: $offset) {
      ...PhotoFragment
      user {
        id
        username
        avatar
      }
      caption
      comments {
        ...CommentFragment
      }
      createdAt
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;
//1:06~ #16.10 Infinite Scrolling part One
export default function Feed({ navigation }) {
  const { data, loading, refetch, fetchMore } = useQuery(FEED_QUERY, {
    variables: {
      offset: 0,
    },
  });
  const renderPhoto = ({ item: photo }) => {
    return <Photo {...photo} />;
  };

  const refresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const [refreshing, setRefreshing] = useState(false);

  return (
    <ScreenLayout loading={loading}>
      <TouchableOpacity onPress={() => logUserOut()}>
        <Text style={{ color: 'red' }}>Logout</Text>
      </TouchableOpacity>
      <FlatList
        onEndReachedThreshold={0.02}
        onEndReached={() =>
          fetchMore({
            variables: {
              offset: data?.seeFeed?.length,
            },
          })
        }
        refreshing={refreshing}
        onRefresh={refresh}
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
        data={data?.seeFeed}
        keyExtractor={(photo) => '' + photo.id}
        renderItem={renderPhoto}
      />
    </ScreenLayout>

    // <View
    //   style={{
    //     backgroundColor: 'black',
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   }}
    // >
    //   {loading ? <ActivityIndicator color="white" /> : null}
    //   <ScrollView>
    //     <View style={{ height: 20000, backgroundColor: 'green' }}>
    //       <Text>I'm super big</Text>
    //     </View>
    //   </ScrollView>

    //   <TouchableOpacity onPress={() => logUserOut()}>
    //     <Text style={{ color: 'white' }}>Feed</Text>
    //   </TouchableOpacity>
    // </View>
  );
}
