/*eslint-disable react/prop-types*/

import React from 'react';
import TabView from '../../components/TabView';
import HelloView from '../../components/HelloView';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const key = props.scene.route.key;

  if (key === 'Hello') {
    return <HelloView />;
  }

  return <TabView title={props.scene.route.title} />

  throw new Error('Unknown navigation key: ' + key);
}
