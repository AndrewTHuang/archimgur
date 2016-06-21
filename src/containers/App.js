import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as photoFeedActions from '../actions/photoFeed';
import Header from '../components/Header';
import TabsContainer from './TabsContainer';
import FeedContainer from './FeedContainer';

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
    this.props.fetchPhotos(this.props.photoFeed.selectedFeed, this.props.photoFeed.timesFetched);
    this.updateDataSource = this.updateDataSource.bind(this);
    this.fetchPhotosOnFeedChange = this.fetchPhotosOnFeedChange.bind(this);
    this.fetchPhotosOnEndReached = this.fetchPhotosOnEndReached.bind(this);
  }

  updateDataSource() {
    this.props.updateDataSource();
  }

  fetchPhotosOnFeedChange(newFeed) {
    this.props.fetchPhotosOnFeedChange(newFeed, this.props.photoFeed.timesFetched);
  }

  fetchPhotosOnEndReached() {
    this.props.fetchPhotosOnEndReached(this.props.photoFeed.selectedFeed, this.props.photoFeed.timesFetched);
  }

  render() {
    let { selectedFeed, isFetching, dataSource, cabinCards, architectureCards } = this.props.photoFeed;

    return (
      <View style={styles.appContainer}>
        <Header />
        <TabsContainer
          fetchPhotosOnFeedChange={this.fetchPhotosOnFeedChange}
          selectedFeed={selectedFeed}
        />
        <FeedContainer
          selectedFeed={selectedFeed}
          isFetching={isFetching}
          fetchPhotosOnEndReached={this.fetchPhotosOnEndReached}
          dataSource={dataSource}
          cabinCards={cabinCards}
          architectureCards={architectureCards}
          updateDataSource={this.updateDataSource}
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
