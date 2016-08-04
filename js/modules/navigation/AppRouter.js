/*eslint-disable react/prop-types*/

import React from 'react';
import TabView from '../../components/TabView';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const key = props.scene.route.key;

  return <TabView title={props.scene.route.title} />

  throw new Error('Unknown navigation key: ' + key);
}
