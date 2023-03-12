import {createNavigationContainerRef} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

console.log('navigationRef===>', navigationRef);

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function push(...args) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(...args));
  }
}

export function pop(page = 1) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(1));
  } else {
    console.log('not ready');
  }
}
