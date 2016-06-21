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
    this.props.fetchPhotos(this.props.photoFeed.selectedFeed);
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Header />
        <TabsContainer />
        <FeedContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Archimgur);
