import {
  StyleSheet,
  Text,
  TouchableOpacity } from 'react-native';
import React         from 'react';

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress(newFeed) {
    if (this.props.selectedFeed != newFeed) {
      this.props.fetchPhotosOnFeedChange(newFeed);
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.tab, (this.props.selectedFeed === this.props.feedName) && styles.selectedTab]}
        onPress={() => this.onPress(this.props.feedName)}
      >
        <Text style={[styles.tabText, (this.props.selectedFeed === this.props.feedName) && styles.selectedText]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    justifyContent: 'center',
  },
  selectedTab: {
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    paddingTop: 3,
  },
  tabText: {
    fontFamily: 'Helvetica',
    textAlign: 'center',
    fontSize: 14,
    letterSpacing: 1,
  },
  selectedText: {
    fontWeight: '500',
  }
});
