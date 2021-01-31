/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import BoldAndBeautiful from './App';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const comm = () => {

  
    return(
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: "#FFFFFF", alignItems: 'center', 
      justifyContent: 'center'}}>
      <Text style={{ textAlign: 'center', color: 'blue',alignItems: 'center', 
      justifyContent: 'center',flexDirection: 'column'}}>
      Welssss1234
    </Text>
    <BoldAndBeautiful></BoldAndBeautiful>
      </View>
    );
};

class Mytext extends Component{
  render() {
    return(
      <Text style={{ textAlign: 'center', color: 'blue',}}>
      Welssss1234
    </Text>
    );
  }
}
export default comm;
