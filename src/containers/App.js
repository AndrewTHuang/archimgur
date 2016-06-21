import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import TabsContainer from './TabsContainer';
import FeedContainer from './FeedContainer';

export default class Archimgur extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <Header />
        <TabsContainer />
        <FeedContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
