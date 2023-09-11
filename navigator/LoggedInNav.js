import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import Search from '../screens/Search';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';

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
        name="Feed"
        component={Feed}
        screenOptions={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="home" size={focused ? 24 : 20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        screenOptions={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="search" size={focused ? 24 : 20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notifications"
        component={Notifications}
        screenOptions={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="heart" size={focused ? 24 : 20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        screenOptions={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="person" size={focused ? 24 : 20} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
