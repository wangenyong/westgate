/**
 * @flow
 */

import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator
} from 'react-native';

import * as snapshotUtil from './utils/snapshot';

const Setup = React.createClass({
  render: function() {
    return (
      <View style={styles.container}><Text>Setup!</Text></View>
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

module.exports = Setup;
