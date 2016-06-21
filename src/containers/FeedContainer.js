import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FeedCard from '../components/FeedCard';

export default class FeedContainer extends React.Component {
  render() {
    return (
      <View style={styles.feedContainer}>
        <FeedCard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  feedContainer: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
});
