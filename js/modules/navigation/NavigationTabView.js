/**
 * @flow
 */

'use strict'

import React, {PropTypes} from 'react';
import {
  Animated,
  NavigationExperimental as Navigation
} from 'react-native';

const NavigationTabView = React.createClass({
  propTypes: {
    router: PropTypes.func.isRequired,
    navigationState: PropTypes.object.isRequired,
    onNavigateBack: PropTypes.func.isRequired,
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
        getTitle={state => state.title}
      />
    );
  },

  renderScene: function(props: any) {
    return (
      <Navigation.Card
        {...props}
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
        onNavigateBack={this.props.onNavigateBack}
        renderOverlay={this.props.shouldRenderHeader ? this.renderHeader : null}
        renderScene={this.renderScene}
      />
    );
  }
});

export default NavigationTabView;
