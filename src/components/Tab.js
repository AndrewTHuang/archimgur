import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress(newFeed) {
    // On Tab press, toggle this.state.selectedFeed, which will:
    if (this.props.selectedFeed != newFeed) {
      this.props.changeFeed(newFeed);
    }
      // conditionally apply className to Tab to indicate which one is selected via styling
      // render the appropriate feed of photos
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.tab}
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
  tabText: {
    textAlign: 'center',
    fontSize: 16,
  },
});
