import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class FeedCard extends React.Component {

  render() {
    return (
      <View style={styles.feedCard}>
        <View style={styles.statsContainer}>
          <Text style={styles.timeStamp}>5 hours ago</Text>
          <Text style={styles.viewCount}>20 views</Text>
        </View>
        <Image
          resizeMode='contain'
          style={styles.photo}
          source={{uri: 'http://i.imgur.com/yLgcc0F.jpg'}}
        >
        </Image>
        <Text style={styles.description}>St. Angelo's Fort also called Kannur Fort was constructed by the first Portuguese Viceroy, Don Francesco de Almeida in 1505. It is an exotic piece of architecture with its triangular design and magnificent interiors.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  feedCard: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'blue',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photo: {
    flex: 1,
    height: 200,
  },
  timeStamp: {},
  viewCount: {},
  description: {},
});
