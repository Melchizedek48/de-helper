import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import HouseScreen from "./HouseScreen";
import ProfileScreen from "./ProfileScreen";
import Colors from "../../constants/Colors";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Tasks"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Tasks",
        tabBarColor: Colors.primary,
        tabBarIcon: ({ color }) => (
          <Icon name="ios-checkbox" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: Colors.primary2,
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="House Rules"
      component={ExploreStackScreen}
      options={{
        tabBarLabel: "House Rules",
        tabBarColor: Colors.secondry2,
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: "Notifications",
        tabBarColor: "#1f65ff",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabNavigator;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Tasks"
      component={HomeScreen}
      options={{
        title: "Tasks",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={Colors.primary}
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1f65ff",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name="Notifications"
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.primary2,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={Colors.primary2}
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </ProfileStack.Navigator>
);
const ExploreStackScreen = ({ navigation }) => (
  <ExploreStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.secondry2,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ExploreStack.Screen
      name="House Rules"
      component={HouseScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={Colors.secondry2}
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </ExploreStack.Navigator>
);
