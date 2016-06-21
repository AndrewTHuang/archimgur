import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

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
      <TouchableHighlight
        style={[styles.tab, (this.props.selectedFeed === this.props.feedName) && styles.selectedFeed]}
        onPress={() => this.onPress(this.props.feedName)}
      >
        <Text style={styles.tabText}>
          {this.props.title}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: 'black',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  selectedFeed: {
    backgroundColor: '#eee',
    borderBottomWidth: 3,
    paddingTop: 3,
  },
  tabText: {
    textAlign: 'center',
    fontSize: 16,
  },
});
