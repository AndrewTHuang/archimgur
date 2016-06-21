import React from 'react';
import { Image, ListView, StyleSheet, Text, View } from 'react-native';
import moment from 'moment';

export default class FeedCard extends React.Component {
  constructor(props) {
    super(props);
  }

  convertDateTime(datetime) {
    let timeStamp = new moment.unix(datetime).fromNow();
    return timeStamp;
  }

  renderCard(cardData) {
    return (
      <View style={styles.feedCard}>
        <View style={styles.photoContainer}>
          <Image
            resizeMode='contain'
            style={styles.photo}
            source={{uri: cardData.uri}}
          />
        </View>
        <View style={styles.statsContainer}>
          <Text style={styles.timeStamp}>{this.convertDateTime(cardData.datetime)}</Text>
          <Text style={styles.viewCount}>{cardData.views} views</Text>
        </View>
        <Text style={styles.description}>
          {cardData.description || cardData.title}
        </Text>
      </View>
    );
  }

  render() {
    const { selectedFeed, dataSource, cabinCards, architectureCards } = this.props;

    return (
      <ListView
        dataSource={dataSource}
        renderRow={(cardData) => this.renderCard(cardData)}
      />
    )
  }
}

const styles = StyleSheet.create({
  feedCard: {
    justifyContent: 'center',
    margin: 10,
    marginBottom: 100,
    borderWidth: 1,
    borderColor: 'black',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    marginHorizontal: 20,
  },
  photoContainer: {
    paddingBottom: 10,
  },
  photo: {
    height: 300,
  },
  timeStamp: {
    fontSize: 12,
    color: 'grey',
  },
  viewCount: {
    fontSize: 12,
    color: 'grey',
  },
  description: {
    textAlign: 'center',
  },
});
