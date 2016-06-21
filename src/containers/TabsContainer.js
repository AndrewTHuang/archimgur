import {
  StyleSheet,
  View }     from 'react-native';
import React from 'react';
import Tab   from '../components/Tab';

export default class TabsContainer extends React.Component {
  render() {
    return (
      <View style={styles.tabsContainer}>
        <Tab
          title={'Cabin Porn'}
          feedName={'cabin'}
          fetchPhotosOnFeedChange={this.props.fetchPhotosOnFeedChange}
          selectedFeed={this.props.selectedFeed}
        />
        <Tab
          title={'#architecture'}
          feedName={'architecture'}
          fetchPhotosOnFeedChange={this.props.fetchPhotosOnFeedChange}
          selectedFeed={this.props.selectedFeed}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    height: 64, // combined height of status bar + header
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});