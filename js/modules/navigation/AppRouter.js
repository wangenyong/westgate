/*eslint-disable react/prop-types*/

import React from 'react';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const key = props.scene.route.key;


  throw new Error('Unknown navigation key: ' + key);
}
