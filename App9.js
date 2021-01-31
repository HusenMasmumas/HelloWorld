import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

const DATA = [
  {
    id: '1',
    photo: require('./src/images/101.jpg'),
    name: 'บุพเพสันนิวาส',
    view: '15200000'

  },
  {
    id: '2',
    photo: require('./src/images/102.jpg'),
    name: 'รากนครา',
    view: '9920580'
  },
  {
    id: '3',
    photo: require('./src/images/103.jpeg'),
    name: 'โซ่เวรี',
    view: '78902560'
  },
  {
    id: '3',
    photo: require('./src/images/104.jpg'),
    name: 'นาคี',
    view: '9825000'
  },
  {
    id: '3',
    photo: require('./src/images/105.jpg'),
    name: 'ใบไม่ที่ปลิดปลิว',
    view: '75200690'
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
              <Image source={item.photo} style={{ width: '100%', height: 200 }} />
              <View style={{ flexDirection: 'row', margin: 16 }}>

                <View style={{ flexDirection: 'column', marginLeft: 16 }}>
                  <Text style={{ color: "#FFFFFFEE", fontSize: 18, margin: 2, marginLeft: 10 }} > {item.name}</Text>
                  <Text style={{ color: "#CDCDCDEE" }} >ผู้ชม {item.view} View</Text>

                </View>
              </View>
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
  },
  cardStyle:
  {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(100, 100, 100, 1)',
    marginBottom: 20,
    borderRadius: 20,
    margin: 20
  }
});

export default App11;