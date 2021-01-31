import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import InvertibleScrollView from 'react-native-invertible-scroll-view';

const BoldAndBeautiful = () => {
  return (
    <InvertibleScrollView inverted
      ref={ref => { this.scrollView = ref; }}
      onContentSizeChange={() => {
        this.scrollView.scrollTo({ y: 0, animated: true });
      }}
    >
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
    </InvertibleScrollView>
  );
};

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