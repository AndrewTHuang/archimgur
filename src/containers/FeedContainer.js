import {
  ActivityIndicatorIOS,
  StyleSheet,
  Text,
  View }                from 'react-native';
import React            from 'react';
import FeedCard         from '../components/FeedCard';

export default class FeedContainer extends React.Component {
  render() {
    let { isFetchingOnFeedChange } = this.props;

    return (
      <View style={styles.feedContainer}>
        { isFetchingOnFeedChange
          ? <ActivityIndicatorIOS size={'large'} />
          : <FeedCard
              architectureCards={this.props.architectureCards}
              cabinCards={this.props.cabinCards}
              dataSource={this.props.dataSource}
              fetchPhotosOnEndReached={this.props.fetchPhotosOnEndReached}
              selectedFeed={this.props.selectedFeed}
              updateDataSource={this.props.updateDataSource}
            />
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
