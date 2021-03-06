import {fromJS} from 'immutable';
import {NavigationExperimental} from 'react-native';
const {StateUtils: NavigationStateUtils} = NavigationExperimental;

// Actions
const PUSH_ROUTE = 'NavigationState/PUSH_ROUTE';
const POP_ROUTE = 'NavigationState/POP_ROUTE';
const SWITCH_TAB = 'NavigationState/SWITCH_TAB';

export function switchTab(index) {
  return {
    type: SWITCH_TAB,
    payload: index
  };
}

export function pushRoute(route) {
  return {
    type: PUSH_ROUTE,
    payload: route
  };
}

export function popRoute() {
  return {type: POP_ROUTE};
}

// reducers for tabs and scenes are separate
const initialState = fromJS({
  tabs: {
    index: 0,
    routes: [
      {key: 'HomeTab', title: 'Home', iconName: 'ios-home-outline', selectedIconName: 'ios-home'},
      {key: 'ListTab', title: 'List', iconName: 'ios-list-box-outline', selectedIconName: 'ios-list-box'},
      {key: 'GridTab', title: 'Grid', iconName: 'ios-grid-outline', selectedIconName: 'ios-grid'},
      {key: 'ProfileTab', title: 'Profile', iconName: 'ios-person-outline', selectedIconName: 'ios-person'},
      {key: 'MoreTab', title: 'More', iconName: 'ios-more-outline', selectedIconName: 'ios-more'}
    ]
  },
  HomeTab: {
    index: 0,
    routes: [{key: 'Apple', title: '苹果'}]
  },
  ListTab: {
    index: 0,
    routes: [{key: 'Banana', title: '香蕉'}]
  },
  GridTab: {
    index: 0,
    routes: [{key: 'Orange', title: '橘子'}]
  },
  ProfileTab: {
    index: 0,
    routes: [{key: 'Grape', title: '葡萄'}]
  },
  MoreTab: {
    index: 0,
    routes: [{key: 'Peach', title: '桃子'}]
  }
});

export default function NavigationReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_ROUTE: {
      // Push a route into the scenes stack.
      const route = action.payload;
      const tabs = state.get('tabs');
      const tabKey = tabs.getIn(['routes', tabs.get('index')]).get('key');
      const scenes = state.get(tabKey).toJS();
      let nextScenes;
      try {
        nextScenes = NavigationStateUtils.push(scenes, route);
      } catch (e) {
        nextScenes = scenes;
      }
      if (scenes !== nextScenes) {
        return state.set(tabKey, fromJS(nextScenes));
      }
      return state;
    }
    case POP_ROUTE: {
      // Pops a route from the scenes stack.
      const tabs = state.get('tabs');
      const tabKey = tabs.getIn(['routes', tabs.get('index')]).get('key');
      const scenes = state.get(tabKey).toJS();
      const nextScenes = NavigationStateUtils.pop(scenes);
      if (scenes !== nextScenes) {
        return state.set(tabKey, fromJS(nextScenes));
      }
      return state;     
    }
    case SWITCH_TAB: {
      // Switches the tab.
      const tabs = NavigationStateUtils.jumpToIndex(state.get('tabs').toJS(), action.payload);
      if (tabs !== state.get('tabs')) {
        return state.set('tabs', fromJS(tabs));
      }
      return state;     
    }
    default:
      return state;
  }
}

