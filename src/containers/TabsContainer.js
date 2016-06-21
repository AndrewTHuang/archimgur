import React from 'react';
import { StyleSheet, View } from 'react-native';
import Tab from '../components/Tab';

export default class TabsContainer extends React.Component {
  render() {
    return (
      <View style={styles.tabsContainer}>
        <Tab name={'Cabin Porn'}></Tab>
        <Tab name={'#architecture'}></Tab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    height: 64, // combined height of status bar + header
    alignSelf: 'stretch',
    justifyContent: 'space-around'
  },
});