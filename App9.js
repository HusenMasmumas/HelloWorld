import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image,backgroundColor,ImageBackground } from 'react-native';

const DATA = [
  {
    id: '1',
    title: require('./src/images/home.png') ,
    name: 'a'
  },
  {
    id: '2',
    title: require('./src/images/home.png') ,
    name: 'a'
  },
  {
    id: '3',
    title: require('./src/images/home.png') ,
    name: 'a'
  },
  {
    id: '3',
    title: require('./src/images/home.png') ,
    name: 'a'
  },
  {
    id: '3',
    title: require('./src/images/home-2.png') ,
    name: 'a'
  }
];


const App11 = () => {


  return (
    <SafeAreaView style={styles.container}>
<View>
        
       <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (

           
            <View style={styles.cardStyle} >
            <View style={{ flexDirection: 'row', margin: 16 ,}}>
              <Image source={require('./src/images/home.png')} style={{ width: 45, height: 45, borderRadius: (45 / 2) }} />
              <View style={{ flexDirection: 'column', marginLeft: 16 }}>
                <Text style={{ color: "#000000EE" }} >Title</Text>
                <Text style={{ color: "#000000EE" }} >SubTitle</Text>
                
              </View>
            </View>
            <Image source={item.title} style={{ width: '100%', height: 200 }} />
          </View>
          
        )}
      />
     
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },cardStyle:
  {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(105, 210, 231, 0.75)',
    marginBottom: 20,
    borderRadius: 20
  }
});

export default App11;