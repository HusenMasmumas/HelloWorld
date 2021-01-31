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

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <ScrollView style={styles.scrollView}>


          <Text style={styles.baseText}>
            <Text style={styles.innerText}>Film </Text>
            A film, also called a movie, motion picture or moving picture, is a work of visual art used to simulate experiences
            that communicate ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images.
            These images are generally accompanied by sound, and more rarely, other sensory stimulations.[1] The word "cinema",
            short for cinematography, is often used to refer to filmmaking and the film industry, and to the art form that is the
            result of it.

            The moving images of a film are created by photographing actual scenes with a motion-picture camera, by photographing
            drawings or miniature models using traditional animation techniques, by means of CGI and computer animation, or
            by a combination of some or all of these techniques, and other visual effects.

            Traditionally, films were recorded onto celluloid film stock through a photochemical process and then shown through a
            movie projector onto a large screen. Contemporary films are often fully digital through the entire process of
            production, distribution, and exhibition, while films recorded in a photochemical form traditionally included an
            analogous optical soundtrack (a graphic recording of the spoken words, music and other sounds that accompany the
            images which runs along a portion of the film exclusively reserved for it, and is not projected).

            Films are cultural artifacts created by specific cultures. They reflect those cultures, and, in turn,
            affect them. Film is considered to be an important art form, a source of popular entertainment, and a
            powerful medium for educating—or indoctrinating—citizens. The visual basis of film gives it a universal
             power of communication. Some films have become popular worldwide attractions through the use of dubbing or
             subtitles to translate the dialog into other languages.

            The individual images that make up a film are called frames. In the projection of traditional celluloid films, a
            rotating shutter causes intervals of darkness as each frame, in turn, is moved into position to be projected, but
            the viewer does not notice the interruptions because of an effect known as persistence of vision, whereby the eye
            retains a visual image for a fraction of a second after its source disappears. The perception of motion is partly
            due to a psychological effect called the phi phenomenon.

            The name "film" originates from the fact that photographic film (also called film stock) has historically
            been the medium for recording and displaying motion pictures. Many other terms exist for an individual
            motion-picture, including picture, picture show, moving picture, photoplay, and flick. The most common term
            in the United States is movie, while in Europe film is preferred. Common terms for the field in general include
            the big screen, the silver screen, the movies, and cinema; the last of these is commonly used, as an overarching
            term, in scholarly texts and critical essays. In early years, the word sheet was sometimes used instead of screen.

          </Text>

        </ScrollView>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    paddingVertical: 20,
    paddingHorizontal: 20,
    color: '#FFFFFFEE'
  },
  innerText: {
    color: 'red'
  },
  container: {
    flex: 1,

  },
  scrollView: {
    backgroundColor: 'rgba(100, 100, 100, 0.8)',
    marginHorizontal: 15,
    borderRadius: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default BoldAndBeautiful;