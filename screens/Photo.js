import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { PHOTO_FRAGMENT } from '../fragments';
import { Photo } from '../components/Photo';
import ScreenLayout from '../components/ScreenLayout';

const SEE_PHOTO = gql`
  query seePhoto($id: Int!) {
    seePhoto(id: $id) {
      ...PhotoFragment
      user {
        id
        username
        avatar
      }
      caption
    }
  }
  ${PHOTO_FRAGMENT}
`;
export default function PhotoScreen({ route }) {
  const { data, loading, refetch } = useQuery(SEE_PHOTO, {
    variables: { id: route?.params?.photoId },
  });
  console.log(data);
  const [refreshing, setRefresing] = useState();
  const onRefresh = async () => {
    setRefresing(true);
    await refetch();
    setRefresing(false);
  };
  return (
    <ScreenLayout loading={loading}>
      <ScrollView
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
        }
        style={{ backgroundColor: 'black' }}
        contentContainerStyle={{
          backgroundColor: 'black',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Photo {...data?.seePhoto} fullView />
      </ScrollView>
    </ScreenLayout>
  );
}
