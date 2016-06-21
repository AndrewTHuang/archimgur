import {
  ActivityIndicatorIOS,
  Image,
  ListView,
  StyleSheet,
  Text,
  View }      from 'react-native';
import React  from 'react';
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
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{this.convertDateTime(cardData.datetime)}</Text>
          <Text style={styles.infoText}>{cardData.views} views</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            {cardData.description || cardData.title}
          </Text>
        </View>
      </View>
    );
  }

  renderFooter() {
    return <ActivityIndicatorIOS size={'small'} />
  }

  onEndReached(feed, timesFetched) {
    /*
      Bug: onEndReached is fired on initial render, causing a double fetch on load
      Potential solutions:
        1. Utilize lifecycle methods to
    */
    this.props.fetchPhotosOnEndReached(feed, timesFetched);
  }

  render() {
    const { selectedFeed, timesFetched, dataSource, cabinCards, architectureCards } = this.props;

    return (
      <ListView
        dataSource={dataSource}
        renderRow={(cardData) => this.renderCard(cardData)}
        renderFooter={this.renderFooter}
        onEndReachedThreshold={100}
        onEndReached={() => this.onEndReached(selectedFeed, timesFetched)}
      />
    )
  }
}

const styles = StyleSheet.create({
  feedCard: {
    justifyContent: 'center',
    margin: 10,
    marginBottom: 150,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    marginHorizontal: 50,
  },
  photoContainer: {},
  photo: {
    height: 250,
  },
  infoText: {
    fontFamily: 'Helvetica',
    fontSize: 13,
    color: '#999',
    fontWeight: '400',
  },
  descriptionContainer: {
    marginHorizontal: 50
  },
  description: {
    textAlign: 'center',
    fontFamily: 'Helvetica',
    color: '#2d2d2d',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
  },
});
