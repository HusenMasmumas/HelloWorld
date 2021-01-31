import React from 'react';

import Container from './fakeServer';
import Card from './Card';

export default class BoldAndBeautiful extends React.Component {
  render() {
    return (
      <Container>
        
        <Card>
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
        </Card>
      </Container>
    );
  }
}