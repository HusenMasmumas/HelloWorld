
class b extends Component{

  
   SettingsScreen() {
    return (
    <ImageBackground style={{width: '100%', height:'100%'}} source ={require('./src/images/1.jpeg')} >
      <SafeAreaView style={{ flex: 1}}>
        <CustomHeader title="setting"/>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        
          
        <Text>setting!</Text>
        
  </View>
      </SafeAreaView></ImageBackground>
    );
  }
}