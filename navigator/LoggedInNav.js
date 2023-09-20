import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import TabIcon from '../components/nav/TabIcon';
import SharedStackNav from './SharedStackNav';

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: 'rgba(255,255,255,0.3',
          backgroundColor: 'black',
        },
      }}
    >
      <Tabs.Screen
        name="FeedTab"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={'home'} color={color} focused={focused} />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Feed" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="SearchTab"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={'search'} color={color} focused={focused} />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Search" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="CameraTab"
        component={View}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={'camera'} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="NotificationsTab"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={'heart'} color={color} focused={focused} />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Notifications" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="MeTab"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={'person'} color={color} focused={focused} />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Me" />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
