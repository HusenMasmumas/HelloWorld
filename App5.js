import React, { Component } from 'react';
import BoldAndBeautiful from './App';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Platform,
  Image,
  ImageBackground,
} from 'react-native';



class App5 extends Component {

  renderListHeader() {
    return (
      <View>
        <Image style={{ width: '100%', height: 90, resizeMode: 'contain', marginTop: 30, marginBottom: 40 }} source={require('./src/images/home.png')} />
      </View>
    )
  }

  renderItem(item ) {
    
 
    return (
      <View style={styles.cardStyle} >
        <View style={{ flexDirection: 'row', margin: 16 }}>
          <Image source={require('./src/images/home.png')} style={{ width: 45, height: 45, borderRadius: (45 / 2) }} />
          <View style={{ flexDirection: 'column', marginLeft: 16 }}>
            <Text style={{ color: "#000000EE" }} >Title</Text>
            <Text style={{ color: "#000000EE" }} >SubTitle</Text>
            
          </View>
        </View>
        <Image source={require('./src/images/home-2.png')} style={{ width: '100%', height: 200 }} />
      </View>
    )
  }

  render() {
    return (
      <View>
        <ImageBackground style={{ width: '100%', height: '100%' }} source={require('./src/images/1.jpeg')} >
          <FlatList
            style={{ paddingLeft: 32, paddingRight: 32 }}
            data={[1, 2, 3, 4]}
            ListHeaderComponent={this.renderListHeader}
            renderItem={({ item }) => this.renderItem(item)} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    cardStyle:
    {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
      marginBottom: 20,
      borderRadius: 20
    }
  }
)


export default App5;
