import * as React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import BoldAndBeautiful from './App4';

function CustomHeader({title}) {
  return(
    <View style={{flexDirection: 'row', height: 50 }}>
      <View style={{flex: 1,justifyContent: 'center' }} >
        <Image style={{width:30, height: 30, marginLeft: 5}} 
        source={require('./src/images/menu.png')}
        resizeMode="contain"
        />

      </View>
        <View style={{flex: 1.5, justifyContent:'center' }} >
          <Text style={{textAlign: 'center'}} >{title}</Text>
        </View>
        <View style={{flex: 1 }} />
    </View>
  )
}

function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Home"/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        
      <BoldAndBeautiful></BoldAndBeautiful>
      <TouchableOpacity style={{marginTop: 20}} >
        <Text>Go Home Detail</Text>
      </TouchableOpacity>
</View>
    </SafeAreaView>
  );
}

function HomeScreenDetail() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Home Detail"/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        
      <Text>Home! Detail!</Text>
</View>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="setting"/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        
      <Text>setting!</Text>
      <TouchableOpacity style={{marginTop: 20}} >
        <Text>Go Home setting</Text>
      </TouchableOpacity>
</View>
    </SafeAreaView>
  );
}

function SettingsScreenDetail() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="setting Detail"/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        
      <Text>setting Detail!</Text>

</View>
    </SafeAreaView>
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
      <Stack.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler}  />
      </Stack.Navigator>
  )
}

function SettingStack() {
  return (
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen name="Setting" component={SettingsScreen} options={navOptionHandler}  />
      <Stack.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionHandler} />
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
        return <Image source={iconName} style={{width: 20, height: 20}} resizeMode="contain" />;
      },
    })}
    // ชื่อเปลี่ยนสี
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingStack} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
