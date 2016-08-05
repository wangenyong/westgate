import {fromJS} from 'immutable';

// Actions
const PUSH_ROUTE = 'NavigationState/PUSH_ROUTE';
const POP_ROUTE = 'NavigationState/POP_ROUTE';
const SWITCH_TAB = 'NavigationState/SWITCH_TAB';
const NAVIGATION_COMPLETED = 'NavigationState/NAVIGATION_COMPLETED';

export function switchTab(index) {
  return {
    type: SWITCH_TAB,
    payload: index
  };
}

// Action creators
export function pushRoute(state) {
  return (dispatch, getState) => {
    // conditionally execute push to avoid double
    // navigations due to impatient users
    dispatch({type: PUSH_ROUTE, payload: state});
  };
}

export function popRoute() {
  return {type: POP_ROUTE};
}


const initialState = fromJS(
  createNavigationState('MainNavigation', 'App', [
    createNavigationState('Tab1', 'Apple', [{key: 'Apple', title: '苹果'}]),
    createNavigationState('Tab2', 'Banana', [{key: 'Banana', title: '香蕉'}]),
    createNavigationState('Tab3', 'Orange', [{key: 'Orange', title: '橘子'}])
  ]));

export default function NavigationReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_ROUTE:
      return state
        .updateIn(['routes', state.get('index')], tabState =>
          tabState
            .update('routes', routes => routes.push(fromJS(action.payload)))
            .set('index', tabState.get('routes').size));

    case POP_ROUTE:
      return state
        .updateIn(['routes', state.get('index')], tabState =>
          tabState
            .update('routes', routes => routes.pop())
            .set('index', tabState.get('routes').size - 2));

    case SWITCH_TAB:
      return state.set('index', action.payload);

    default:
      return state;
  }
}

// Helper for creating a state object compatible with the
// RN NavigationExperimental navigator
function createNavigationState(key, title, routes) {
  return {
    key,
    title,
    index: 0,
    routes
  };
}
