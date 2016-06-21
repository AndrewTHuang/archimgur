import React from 'react';
import { Image, ListView, StyleSheet, Text, View } from 'react-native';

export default class FeedCard extends React.Component {
  constructor(props) {
    super(props);
    // this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    // this.renderCard = this.renderCard.bind(this);
  }

  componentWillUpdate() {
    // Update dataSource
    // console.log('will update')
    // this.props.updateDataSource();
  }



  // should pass in indiv cardData, not feed
  // renderCard is called once per card in the dataSource
  renderCard(cardData) {
    // let feedCards = `${feed}Cards`;
    // let selectedFeed = this.props[feedCards];

    console.log('cardData -- ', cardData)

    return (
      <View style={styles.feedCard}>
        <View style={styles.statsContainer}>
          <Text style={styles.timeStamp}>{cardData.datetime}</Text>
          <Text style={styles.viewCount}>{cardData.views}</Text>
        </View>
        <Image
          resizeMode='contain'
          style={styles.photo}
          source={{uri: cardData.uri}}
        >
        </Image>
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
