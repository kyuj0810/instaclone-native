import { FlatList, Text, View } from 'react-native';
import { logUserOut } from '../apollo';
import { gql, useQuery } from '@apollo/client';
import { PHOTO_FRAGMENT, COMMENT_FRAGMENT } from '../fragments';
import ScreenLayout from '../components/ScreenLayout';
import Photo from '../components/Photo';

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PhotoFragment
      user {
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

export default function Feed({ navigation }) {
  const { data, loading } = useQuery(FEED_QUERY);
  const renderPhoto = ({ item: photo }) => {
    return <Photo {...photo} />;
  };
  return (
    <ScreenLayout loading={loading}>
      <FlatList
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
