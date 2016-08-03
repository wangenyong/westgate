/**
 * @flow
 */

'use strict';

import React, { PropTypes } from 'react';
import {
   StyleSheet,
   Text,
   View
} from 'react-native';

const TabView = React.createClass({
  propTypes: {
    title: PropTypes.string.isRequired
  },

  render: function() {
    return (
      <View style={styles.container}><Text>{this.props.title}</Text></View>
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

export default TabView;
