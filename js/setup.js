/**
 * @flow
 */

'use strict'

import {connect} from 'react-redux';
import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator
} from 'react-native';
import * as snapshotUtil from './utils/snapshot';
import * as SessionStateActions from './modules/session/SessionState';
import store from './redux/store';

const Setup = React.createClass({
  PropTypes: {
    isReady: PropTypes.bool.isRequired,
    dispatch: PropTypes.bool.isRequired
  },

  componentDidMount: function() {
    snapshotUtil.resetSnapshot()
      .then(snapshot => {
        const {dispatch} = this.props;
        if (snapshot) {
          dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));
        } else {
          dispatch(SessionStateActions.initializeSessionState());
        }

        store.subscribe(() => {
          snapshotUtil.saveSnapshot(store.getState());
        });
      })
  },

  render: function() {
    return (
      <View style={styles.container}><Text>Setup</Text></View>
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

function mapStateToProps(state) {
  return {
    isReady: state.getIn(['session', 'isReady'])
  };
}

export default connect(mapStateToProps)(Setup);
