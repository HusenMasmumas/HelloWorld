import React, { Component } from 'react';

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

class BoldAndBeautiful extends Component {


    renderListHeader(){
        return(
            <View>
    <Image style={{width: '100%', height:90, resizeMode: 'contain', marginTop: 30,marginBottom: 40}} source={require('./src/images/home.png')} />
            </View>
        )
    }

    renderItem(item){
        return(
    <View style={styles.cardStyle} >
        <View style={{flexDirection: 'row', margin: 16}}>
       
        <Text style={styles.baseText}>
        This is a large amount of text which will be cut off by the bottom of the screen, unless
        we enable scrolling. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque vel consequat justo, quis rhoncus velit. Praesent vel eros non lacus
        condimentum aliquet sit amet non odio. Phasellus quis posuere ante, malesuada mattis orci.
        Mauris vel hendrerit augue, eu mattis quam. Nullam tempor rhoncus ante ac efficitur.
        Etiam nec convallis tellus, non mattis turpis. Duis interdum nibh in cursus molestie.
        Praesent tempor vulputate mi, ut ultrices orci faucibus a.
        This is a large amount of text which will be cut off by the bottom of the screen, unless
        we enable scrolling. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque vel consequat justo, quis rhoncus velit. Praesent vel eros non lacus
        condimentum aliquet sit amet non odio. Phasellus quis posuere ante, malesuada mattis orci.
        Mauris vel hendrerit augue, eu mattis quam. Nullam tempor rhoncus ante ac efficitur.
        Etiam nec convallis tellus, non mattis turpis. Duis interdum nibh in cursus molestie.
        Praesent tempor vulputate mi, ut ultrices orci faucibus a.
        This is a large amount of text which will be cut off by the bottom of the screen, unless
        we enable scrolling. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque vel consequat justo, quis rhoncus velit. Praesent vel eros non lacus
        condimentum aliquet sit amet non odio. Phasellus quis posuere ante, malesuada mattis orci.
        Mauris vel hendrerit augue, eu mattis quam. Nullam tempor rhoncus ante ac efficitur.
        Etiam nec convallis tellus, non mattis turpis. Duis interdum nibh in cursus molestie.
        Praesent tempor vulputate mi, ut ultrices orci faucibus a.
        This is a large amount of text which will be cut off by the bottom of the screen, unless
        we enable scrolling. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque vel consequat justo, quis rhoncus velit. Praesent vel eros non lacus
        condimentum aliquet sit amet non odio. Phasellus quis posuere ante, malesuada mattis orci.
        Mauris vel hendrerit augue, eu mattis quam. Nullam tempor rhoncus ante ac efficitur.
        Etiam nec convallis tellus, non mattis turpis. Duis interdum nibh in cursus molestie.
        Praesent tempor vulputate mi, ut ultrices orci faucibus a.
        This is a large amount of text which will be cut off by the bottom of the screen, unless
        we enable scrolling. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque vel consequat justo, quis rhoncus velit. Praesent vel eros non lacus
        condimentum aliquet sit amet non odio. Phasellus quis posuere ante, malesuada mattis orci.
        Mauris vel hendrerit augue, eu mattis quam. Nullam tempor rhoncus ante ac efficitur.
        Etiam nec convallis tellus, non mattis turpis. Duis interdum nibh in cursus molestie.
        Praesent tempor vulputate mi, ut ultrices orci faucibus a.
        This is a large amount of text which will be cut off by the bottom of the screen, unless
        we enable scrolling. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque vel consequat justo, quis rhoncus velit. Praesent vel eros non lacus
        condimentum aliquet sit amet non odio. Phasellus quis posuere ante, malesuada mattis orci.
        Mauris vel hendrerit augue, eu mattis quam. Nullam tempor rhoncus ante ac efficitur.
        Etiam nec convallis tellus, non mattis turpis. Duis interdum nibh in cursus molestie.
        Praesent tempor vulputate mi, ut ultrices orci faucibus a.
        This is a large amount of text which will be cut off by the bottom of the screen, unless
        we enable scrolling. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque vel consequat justo, quis rhoncus velit. Praesent vel eros non lacus
        condimentum aliquet sit amet non odio. Phasellus quis posuere ante, malesuada mattis orci.
        Mauris vel hendrerit augue, eu mattis quam. Nullam tempor rhoncus ante ac efficitur.
        Etiam nec convallis tellus, non mattis turpis. Duis interdum nibh in cursus molestie.
        Praesent tempor vulputate mi, ut ultrices orci faucibus a.
        This is a large amount of text which will be cut off by the bottom of the screen, unless
        we enable scrolling. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque vel consequat justo, quis rhoncus velit. Praesent vel eros non lacus
        condimentum aliquet sit amet non odio. Phasellus quis posuere ante, malesuada mattis orci.
        Mauris vel hendrerit augue, eu mattis quam. Nullam tempor rhoncus ante ac efficitur.
        Etiam nec convallis tellus, non mattis turpis. Duis interdum nibh in cursus molestie.
        Praesent tempor vulputate mi, ut ultrices orci faucibus a.
        This is a large amount of text which will be cut off by the bottom of the screen, unless
        we enable scrolling. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque vel consequat justo, quis rhoncus velit. Praesent vel eros non lacus
        condimentum aliquet sit amet non odio. Phasellus quis posuere ante, malesuada mattis orci.
        Mauris vel hendrerit augue, eu mattis quam. Nullam tempor rhoncus ante ac efficitur.
        Etiam nec convallis tellus, non mattis turpis. Duis interdum nibh in cursus molestie.
        Praesent tempor vulputate mi, ut ultrices orci faucibus a.
        This is a large amount of text which will be cut off by the bottom of the screen, unless
        we enable scrolling. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque vel consequat justo, quis rhoncus velit. Praesent vel eros non lacus
        condimentum aliquet sit amet non odio. Phasellus quis posuere ante, malesuada mattis orci.
        Mauris vel hendrerit augue, eu mattis quam. Nullam tempor rhoncus ante ac efficitur.
        Etiam nec convallis tellus, non mattis turpis. Duis interdum nibh in cursus molestie.
        Praesent tempor vulputate mi, ut ultrices orci faucibus a.
        This is a large amount of text which will be cut off by the bottom of the screen, unless
        we enable scrolling. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque vel consequat justo, quis rhoncus velit. Praesent vel eros non lacus
        condimentum aliquet sit amet non odio. Phasellus quis posuere ante, malesuada mattis orci.
        Mauris vel hendrerit augue, eu mattis quam. Nullam tempor rhoncus ante ac efficitur.
        Etiam nec convallis tellus, non mattis turpis. Duis interdum nibh in cursus molestie.
        Praesent tempor vulputate mi, ut ultrices orci faucibus a.
        This is a large amount of text which will be cut off by the bottom of the screen, unless
        we enable scrolling. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque vel consequat justo, quis rhoncus velit. Praesent vel eros non lacus
        condimentum aliquet sit amet non odio. Phasellus quis posuere ante, malesuada mattis orci.
        Mauris vel hendrerit augue, eu mattis quam. Nullam tempor rhoncus ante ac efficitur.
        Etiam nec convallis tellus, non mattis turpis. Duis interdum nibh in cursus molestie.
        Praesent tempor vulputate mi, ut ultrices orci faucibus a.
        This is a large amount of text which will be cut off by the bottom of the screen, unless
        we enable scrolling. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque vel consequat justo, quis rhoncus velit. Praesent vel eros non lacus
        condimentum aliquet sit amet non odio. Phasellus quis posuere ante, malesuada mattis orci.
        Mauris vel hendrerit augue, eu mattis quam. Nullam tempor rhoncus ante ac efficitur.
        Etiam nec convallis tellus, non mattis turpis. Duis interdum nibh in cursus molestie.
        Praesent tempor vulputate mi, ut ultrices orci faucibus a.
        This is a large amount of text which will be cut off by the bottom of the screen, unless
        we enable scrolling. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque vel consequat justo, quis rhoncus velit. Praesent vel eros non lacus
        condimentum aliquet sit amet non odio. Phasellus quis posuere ante, malesuada mattis orci.
        Mauris vel hendrerit augue, eu mattis quam. Nullam tempor rhoncus ante ac efficitur.
        Etiam nec convallis tellus, non mattis turpis. Duis interdum nibh in cursus molestie.
        Praesent tempor vulputate mi, ut ultrices orci faucibus a.
      <Text style={styles.innerText}> and red</Text>
      </Text>
      
        </View>
     
        </View>
        )
    }


    render() {
        return (
          <View>
              <ImageBackground style={{width: '100%', height:'100%'}} source ={require('./src/images/1.jpeg')} >
            <FlatList 
            style={{paddingLeft:32, paddingRight: 32}}
            data ={[1,2,3,4]} 
            ListHeaderComponent={this.renderListHeader}
            renderItem={({item})=> this.renderItem(item)} />
            </ImageBackground>
          </View>
        );
      }
    }


const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    paddingVertical: 30,
    paddingHorizontal: 80,
  },
  innerText: {
    color: 'red'
  }
});

export default BoldAndBeautiful;