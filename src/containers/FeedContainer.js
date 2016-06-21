import React from 'react';
import { ActivityIndicatorIOS, ScrollView, StyleSheet, Text, View } from 'react-native';
import FeedCard from '../components/FeedCard';

export default class FeedContainer extends React.Component {
  render() {
    let { isFetching } = this.props;

    return (
      <View style={styles.feedContainer}>
        { isFetching
          ? <ActivityIndicatorIOS
              size={'large'}
            />
          : <ScrollView>
              <FeedCard
                selectedFeed={this.props.selectedFeed}
                dataSource={this.props.dataSource}
                cabinCards={this.props.cabinCards}
                architectureCards={this.props.architectureCards}
                updateDataSource={this.props.updateDataSource}
              />
            </ScrollView>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
