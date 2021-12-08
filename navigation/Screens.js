import React from 'react';
import { Block } from "galio-framework";
import { Easing, Animated, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// screens
import Home from '../screens/Home';
import Pro from '../screens/Pro';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Components from '../screens/Components';
import Articles from '../screens/Articles';
import Destinations from '../screens/Destinations';
import Buddies from '../screens/Buddies';
import Gear from '../screens/Gear';
import Photographers from '../screens/Photographers';
import Onboarding from '../screens/Onboarding';
import SettingsScreen from '../screens/Settings';
// drawer
import CustomDrawerContent from "./Menu";
// header for screens
import { Header, Icon} from '../components';
import { nowTheme, tabs } from "../constants";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function ComponentsStack(props) {
  return (
    <Stack.Navigator initialRouteName="Components" mode="card" headerMode="screen">
      <Stack.Screen name="Components" component={Components} options={{
        header:({ navigation, scene }) => (<Header title="Components" navigation={navigation} scene={scene} />),
        backgroundColor: "#FFFFFF"
      }}/>
    </Stack.Navigator>
  );
}

function DestinationsStack(props) {
  return (
    <Stack.Navigator initialRouteName="Destinations" mode="card" headerMode="screen">
      <Stack.Screen name="Destinations" component={Destinations} options={{
        header:({ navigation, scene }) => (<Header title="Destinations" navigation={navigation} scene={scene} />),
        backgroundColor: "#FFFFFF"
      }}/>
    </Stack.Navigator>
  );
}
function BuddiesStack(props) {
  return (
    <Stack.Navigator initialRouteName="Buddies" mode="card" headerMode="screen">
      <Stack.Screen name="Buddies" component={Buddies} options={{
        header:({ navigation, scene }) => (<Header title="Find Travel Buddies" navigation={navigation} scene={scene} />),
        backgroundColor: "#FFFFFF"
      }}/>
    </Stack.Navigator>
  );
}
function GearStack(props) {
  return (
    <Stack.Navigator initialRouteName="Gear" mode="card" headerMode="screen">
      <Stack.Screen name="Gear" component={Gear} options={{
        header:({ navigation, scene }) => (<Header title="Find Travel Gear" navigation={navigation} scene={scene} />),
        backgroundColor: "#FFFFFF"
      }}/>
    </Stack.Navigator>
  );
}
function InstructorsStack(props) {
  return (
    <Stack.Navigator initialRouteName="Instructors" mode="card" headerMode="screen">
      <Stack.Screen name="Instructors" component={Gear} options={{
        header:({ navigation, scene }) => (<Header title="Instructors" navigation={navigation} scene={scene} />),
        backgroundColor: "#FFFFFF"
      }}/>
    </Stack.Navigator>
  );
}
function PhotographersStack(props) {
  return (
    <Stack.Navigator initialRouteName="Photographers" mode="card" headerMode="screen">
      <Stack.Screen name="Photographers" component={Photographers} options={{
        header:({ navigation, scene }) => (<Header title="Photographers" navigation={navigation} scene={scene} />),
        backgroundColor: "#FFFFFF"
      }}/>
    </Stack.Navigator>
  );
}
function ArticlesStack(props) {
  return (
    <Stack.Navigator initialRouteName="Articles" mode="card" headerMode="screen">
      <Stack.Screen name="Articles" component={Articles} options={{
        header: ({ navigation, scene }) => (<Header title="Articles" navigation={navigation} scene={scene} />),
        backgroundColor: '#FFFFFF'
      }} />
    </Stack.Navigator>
  );
}

function AccountStack(props) {
  return (
    <Stack.Navigator initialRouteName="Account" mode="card" headerMode="screen">
      <Stack.Screen
        name="Account"
        component={Register}
        options={{
          header: ({ navigation, scene }) => (
            <Header 
              transparent
              title="Create Account"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" }
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: nowTheme.COLORS.PRIMARY,
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: nowTheme.COLORS.WHITE,
        inactiveTintColor: nowTheme.COLORS.WHITE,
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Destinations" component={DestinationsStack} />
      <Drawer.Screen name="Travel Buddies" component={BuddiesStack}/>
      <Drawer.Screen name="Find Gear" component={GearStack}/>

      <Drawer.Screen name="Hire a Photographer" component={PhotographersStack}/>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Components" component={ComponentsStack} />
      <Drawer.Screen name="Articles" component={ArticlesStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Account" component={AccountStack} />
    </Drawer.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

