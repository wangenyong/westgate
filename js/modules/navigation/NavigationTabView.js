/**
 * @flow
 */

'use strict'

import React, {PropTypes} from 'react';
import {
  Animated,
  NavigationExperimental as Navigation
} from 'react-native';
import TabView from '../../components/TabView';

const NavigationTabView = React.createClass({
  propTypes: {
    router: PropTypes.func.isRequired,
    navigationState: PropTypes.object.isRequired,
    onNavigateBack: PropTypes.func.isRequired,
    onNavigateCompleted: PropTypes.func.isRequired,
    shouldRenderHeader: PropTypes.bool
  },

  getDefaultProps: function() {
    return {shouldRenderHeader: true};
  },

  renderHeader: function(props: any) {
    return (
      <Navigation.Header
        {...props}
        onNavigateBack={this.props.onNavigateBack}
        getTitle={state => state.key}
      />
    );
  },

  renderScene: function(props: any) {
    return (
      <Navigation.Card
        {...props}
        onNavigateBack={this.props.onNavigateBack}
        key={props.scene.route.key}
        renderScene={this.props.router}
      />
    );
  },

  render: function() {
    return (
      <Navigation.CardStack
        style={{flex: 1}}
        navigationState={this.props.navigationState}
        renderOverlay={this.props.shouldRenderHeader ? this.renderHeader : null}
        renderScene={this.renderScene}
      />
    );
  }
});

export default NavigationTabView;
