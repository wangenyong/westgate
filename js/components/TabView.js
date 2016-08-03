/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View
} from 'react-native';

const TabView = React.createClass({
  render: function() {
    return (
      <View style={styles.container}><Text>TabView!</Text></View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

module.exports = TabView;
