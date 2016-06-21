import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import FeedCard from '../components/FeedCard';

export default class FeedContainer extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.feedContainer}>
        <FeedCard
          selectedFeed={this.props.selectedFeed}
          dataSource={this.props.dataSource}
          cabinCards={this.props.cabinCards}
          architectureCards={this.props.architectureCards}
          updateDataSource={this.props.updateDataSource}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  feedContainer: {}
});
