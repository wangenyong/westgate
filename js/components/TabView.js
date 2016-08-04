/**
 * @flow
 */

'use strict';

import React, { PropTypes } from 'react';
import {
   StyleSheet,
   Text,
   View,
   TouchableOpacity
} from 'react-native';
import * as NavigationState from '../modules/navigation/NavigationState';
import {connect} from 'react-redux';

const TabView = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired
  },

  hello: function() {
    this.props.dispatch(NavigationState.pushRoute({key: 'hello'}));
  },

  render: function() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.hello} >
          <Text>{this.props.title}</Text>
        </TouchableOpacity>
      </View>

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

export default connect()(TabView);
