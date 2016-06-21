import {
  StyleSheet,
  Text,
  View }                       from 'react-native';
import React                   from 'react';
import { bindActionCreators }  from 'redux';
import { connect }             from 'react-redux';
import * as photoFeedActions   from '../actions/photoFeed';
import Header                  from '../components/Header';
import TabsContainer           from './TabsContainer';
import FeedContainer           from './FeedContainer';

const mapStateToProps = (state) => ({
  photoFeed: state.photoFeed
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(photoFeedActions, dispatch);
}

export class Archimgur extends React.Component {
  constructor(props) {
    super(props);

    // On load, fetch photos from the currently selected feed
    this.props.fetchPhotos(this.props.photoFeed.selectedFeed, this.props.photoFeed.timesFetched, 'FeedChange');
    this.fetchPhotosOnFeedChange = this.fetchPhotosOnFeedChange.bind(this);
    this.fetchPhotosOnEndReached = this.fetchPhotosOnEndReached.bind(this);
  }

  fetchPhotosOnFeedChange(newFeed) {
    this.props.fetchPhotosOnFeedChange(newFeed, this.props.photoFeed.timesFetched, 'FeedChange');
  }

  fetchPhotosOnEndReached() {
    this.props.fetchPhotosOnEndReached(this.props.photoFeed.selectedFeed, this.props.photoFeed.timesFetched, 'EndReached');
  }

  render() {
    let { selectedFeed, isFetchingOnFeedChange, dataSource, cabinCards, architectureCards } = this.props.photoFeed;

    return (
      <View style={styles.appContainer}>
        <Header />
        <TabsContainer
          fetchPhotosOnFeedChange={this.fetchPhotosOnFeedChange}
          selectedFeed={selectedFeed}
        />
        <FeedContainer
          architectureCards={architectureCards}
          cabinCards={cabinCards}
          dataSource={dataSource}
          fetchPhotosOnEndReached={this.fetchPhotosOnEndReached}
          isFetchingOnFeedChange={isFetchingOnFeedChange}
          selectedFeed={selectedFeed}
          updateDataSource={this.props.updateDataSource}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 20,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Archimgur);
