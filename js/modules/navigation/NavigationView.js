/**
 * @flow
 */

'use strict'

import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import AppRouter from './AppRouter';
import NavigationTabView from './NavigationTabView';
import TabBar from '../../components/TabBar';

const TAB_BAR_HEIGHT = 50;

const NavigationView = React.createClass({
  propTypes: {
    navigationState: PropTypes.object.isRequired,
    onNavigateBack: PropTypes.func.isRequired,
    switchTab: PropTypes.func.isRequired
  },

  render: function() {
    const {routes, index} = this.props.navigationState;
    const tabs = routes.map((tabState, tabIndex) => {
      return (
        <View key={'tab' + tabIndex} style={[styles.viewContainer, index !== tabIndex && styles.hidden]}>
          <NavigationTabView
            router={AppRouter}
            navigationState={tabState}
            onNavigateBack={this.props.onNavigateBack}
          />
        </View>
      );
    });

    return (
      <View style={styles.container}>
        {tabs}
        <TabBar
          height={TAB_BAR_HEIGHT}
          tabs={routes}
          currentTabIndex={index}
          switchTab={this.props.switchTab}
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: TAB_BAR_HEIGHT
  },
  hidden: {
    overflow: 'hidden',
    width: 0,
    height: 0
  }
});

export default NavigationView;
