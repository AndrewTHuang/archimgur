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
  convertDateTime(datetime) {
    // Use the `moment` library to calculate relevant time (e.g. '6 hours ago')
    return new moment.unix(datetime).fromNow();
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
    this.props.fetchPhotosOnEndReached(feed, timesFetched);
  }

  render() {
    const { selectedFeed, timesFetched, dataSource } = this.props;

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
    marginBottom: 125,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    marginHorizontal: 50,
  },
  photo: {
    height: 250,
    marginBottom: 10,
  },
  infoText: {
    fontFamily: 'Helvetica',
    fontSize: 13,
    color: '#999',
    fontWeight: '400',
  },
  descriptionContainer: {
    marginHorizontal: 50,
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
