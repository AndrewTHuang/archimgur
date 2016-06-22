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
          feedName={'cabin'}
          fetchPhotosOnFeedChange={this.props.fetchPhotosOnFeedChange}
          selectedFeed={this.props.selectedFeed}
          title={'Cabin Porn'}
        />
        <Tab
          feedName={'architecture'}
          fetchPhotosOnFeedChange={this.props.fetchPhotosOnFeedChange}
          selectedFeed={this.props.selectedFeed}
          title={'#architecture'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    height: 36,
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});
