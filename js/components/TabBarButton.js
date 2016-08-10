/**
 * @flow
 */

'use strict'

import React, {PropTypes} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/colorUtil';

export default React.createClass({
  displayName: 'TabBarButton',
  propTypes: {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired
  },
  render: function() {
    return (
      <TouchableOpacity
        onPress={this.props.action}
        style={[styles.button]}
        activeOpacity={1}
        >
        <Icon name={this.props.icon} size={30} color={Colors.primaryColor} />
      </TouchableOpacity>
    );
  }
});

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selected: {
    backgroundColor: 'yellow'
  }
});
