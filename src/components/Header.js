import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>archimgur</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 44, // native iOS header bar standard height
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 20,
  },
});
