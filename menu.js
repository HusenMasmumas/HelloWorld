import * as React from 'react';
import { SafeAreaView, Text, View, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import BoldAndBeautiful from './App6';
import App11 from './App9';


function CustomHeader({ title }) {
  return (
    <View style={{ flexDirection: 'row', height: 50 }}>
      <View style={{ flex: 1, justifyContent: 'center' }} >
      </View>
      <View style={{ flex: 1.5, justifyContent: 'center' }} >
        <Text style={{ textAlign: 'center', color: '#FFFFFF', fontSize: 17 }} >{title}</Text>
      </View>
      <View style={{ flex: 1 }} />
    </View>
  )
}

function HomeScreen() {
  return (

    <ImageBackground style={{ width: '100%', height: '100%' }} source={require('./src/images/1.jpeg')} >
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title="setting" />

        <App11></App11>

      </SafeAreaView></ImageBackground>
  );
}



function SettingsScreen() {
  return (
    <ImageBackground style={{ width: '100%', height: '100%' }} source={require('./src/images/1.jpeg')} >
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title="Home" />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >

          <BoldAndBeautiful></BoldAndBeautiful>

        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={navOptionHandler} />

    </Stack.Navigator>
  )
}

function SettingStack() {
  return (
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen name="Setting" component={SettingsScreen} options={navOptionHandler} />
    </Stack.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('./src/images/home-2.png')
              : require('./src/images/home.png');
          } else if (route.name === 'Settings') {
            iconName = focused ?
              require('./src/images/settings-2.png') :
              require('./src/images/settings.png');
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 25, height: 25 }} resizeMode="contain" />;
        },
      })}
      // ชื่อเปลี่ยนสี
      tabBarOptions={{

        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'rgba(4,47,89,0.5)',
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingStack} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <MyTabs />
    </NavigationContainer>
  );
}
