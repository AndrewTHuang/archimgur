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
              selectedFeed={this.props.selectedFeed}
              fetchPhotosOnEndReached={this.props.fetchPhotosOnEndReached}
              dataSource={this.props.dataSource}
              cabinCards={this.props.cabinCards}
              architectureCards={this.props.architectureCards}
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
