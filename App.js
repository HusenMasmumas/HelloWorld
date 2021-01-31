import * as React from 'react';
import { SafeAreaView, Text, View, Image, ImageBackground,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home';
import Home1 from './Home1';


function CustomHeader({ title }) {
  return (
    <View style={styles.headerview1}>
      <View style={styles.headerview2} >
      </View>
      <View style={styles.headerview3} >
        <Text style={styles.headertext} >{title}</Text>
      </View>
      <View style={styles.headerview4} />
    </View>
  )
}

function HomeScreen() {
  return (

    <ImageBackground style={styles.homeImag} source={require('./src/images/1.jpeg')} >
      <SafeAreaView style={styles.homeSafe}>
        <CustomHeader title="Home" />

        <Home></Home>
        
      </SafeAreaView>
      </ImageBackground>
  );
}

function InformationScreen() {
  return (
    <ImageBackground style={styles.inforImag} source={require('./src/images/1.jpeg')} >
      <SafeAreaView style={styles.inforSafe}>
        <CustomHeader title="Information" />
        <View style={styles.inforView} >

        <Home1></Home1>

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

function InformationStack() {
  return (
    <Stack.Navigator initialRouteName="Information">
      <Stack.Screen name="Information" component={InformationScreen} options={navOptionHandler} />
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
          } else if (route.name === 'Information') {
            iconName = focused ?
              require('./src/images/information1.png') :
              require('./src/images/information.png');
          }

          
          return <Image source={iconName} style={styles.MyTabsImag} resizeMode="contain" />;
        },
      })}
      // ชื่อเปลี่ยนสี
      tabBarOptions={{

        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'rgba(0,0,0,0.5)',
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Information" component={InformationStack} />
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

const styles = StyleSheet.create({
headerview1:
  {
    flexDirection: 'row', 
    height: 50,
  },
  headerview2:
  {
    flex: 1, 
    justifyContent: 'center',
  },
  headerview3:
  {
    flex: 1.5, 
    justifyContent: 'center',
  },
  headertext:
  {
    textAlign: 'center', 
    color: '#FFFFFF', 
    fontSize: 17,
  },
  headerview4:
  {
    flex: 1,
  },
  homeImag:
  {
    width: '100%', 
    height: '100%',
  },
  homeSafe:
  {
    flex: 1
  },
  inforImag:
  {
    width: '100%', 
    height: '100%',
  },
  inforSafe:
  {
    flex: 1
  },
  inforView:
  {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  MyTabsImag:
  {
    width: 25, 
    height: 25,
  },

});
