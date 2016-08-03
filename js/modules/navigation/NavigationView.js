/**
 * @flow
 */

'use strict'

import {Actions, Scene, Router, Modal} from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="modal" component={Modal} >
    <Scene key="root">

    </Scene>
  </Scene>
);

const NavigationView = React.createClass({
  render: function() {
    return <Router scenes={scenes}/>
  }
})

module.exports = NavigationView;
