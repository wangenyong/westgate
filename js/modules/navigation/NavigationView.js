'use strict'

import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,
  NavigationExperimental,
  Platform
} from 'react-native';
import AppRouter from './AppRouter';
import TabBar from '../../components/TabBar';

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
  PropTypes: NavigationPropTypes
} = NavigationExperimental;

// Height duplicated from React Native NavigationHeader component
const APP_BAR_HEIGHT = Platform.OS === 'ios' ? 64 : 56;
// Customize bottom tab bar height here if desired
const TAB_BAR_HEIGHT = 50;

const NavigationView = React.createClass({
  propTypes: {
    navigationState: PropTypes.shape({
      tabs: NavigationPropTypes.navigationState.isRequired,
      Tab1: NavigationPropTypes.navigationState.isRequired,
      Tab2: NavigationPropTypes.navigationState.isRequired,
      Tab3: NavigationPropTypes.navigationState.isRequired
    }),
    onNavigateBack: PropTypes.func.isRequired,
    switchTab: PropTypes.func.isRequired,
    pushRoute: PropTypes.func.isRequired
  },

  // NavigationHeader accepts a prop style
  // NavigationHeader.title accepts a prop textStyle
  renderHeader(sceneProps) {
    return (
      <NavigationHeader
        {...sceneProps}
        onNavigateBack={this.props.onNavigateBack}
        renderTitleComponent={() => {
          return (
            <NavigationHeader.Title>
              {sceneProps.scene.route.title}
            </NavigationHeader.Title>
          );
        }}
      />
    );
  },

  renderScene(sceneProps) {
    // render scene and apply padding to cover
    // for app bar and navigation bar
    return (
      <View style={styles.sceneContainer}>
        {AppRouter(sceneProps)}
      </View>
    );
  },

  render: function() {
    const {tabs} = this.props.navigationState;
    const tabKey = tabs.routes[tabs.index].key;
    const scenes = this.props.navigationState[tabKey];

    return (
      <View style={styles.container}>
        <NavigationCardStack
          key={'stack_' + tabKey}
          onNavigateBack={this.props.onNavigateBack}
          navigationState={scenes}
          renderOverlay={this.renderHeader}
          renderScene={this.renderScene}
        />
        <TabBar
          height={TAB_BAR_HEIGHT}
          tabs={tabs}
          currentTabIndex={tabs.index}
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
  sceneContainer: {
    flex: 1,
    marginTop: APP_BAR_HEIGHT,
    marginBottom: TAB_BAR_HEIGHT
  }
});

export default NavigationView;
