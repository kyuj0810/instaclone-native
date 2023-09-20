import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';
import Photo from '../screens/Photo';
import Feed from '../screens/Feed';
import Search from '../screens/Search';
import Notifications from '../screens/Notifications';
import Me from '../screens/Me';
import { Image } from 'react-native';

const Stack = createStackNavigator();

export default function SharedStackNav({ screenName }) {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerTitle: '',
        // headerTransparent: true,
        // headerShown: false,
        headerTintColor: 'white',
        headerMode: 'rscreen',
        headerStyle: {
          backgroundColor: 'black',
        },
      }}
    >
      {screenName === 'Feed' ? (
        <Stack.Screen
          name="FeedScreen"
          component={Feed}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  maxHeight: 40,
                  maxWidth: 130,
                }}
                resizeMode="contain"
                source={require('../assets/logo.png')}
              />
            ),
          }}
        />
      ) : null}
      {screenName === 'Search' ? (
        <Stack.Screen name="Search" component={Search} />
      ) : null}
      {screenName === 'Notifications' ? (
        <Stack.Screen name="Notifications" component={Notifications} />
      ) : null}
      {screenName === 'Me' ? <Stack.Screen name="Me" component={Me} /> : null}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
    </Stack.Navigator>
  );
}
