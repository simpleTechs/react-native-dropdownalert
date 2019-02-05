import { StatusBar, Platform, Dimensions } from 'react-native';

export const StatusBarDefaultBarStyle = StatusBar._defaultProps ? StatusBar._defaultProps.barStyle.value : 'default';
export const StatusBarDefaultBackgroundColor = StatusBar._defaultProps ? StatusBar._defaultProps.backgroundColor.value : 'black';
export const DEFAULT_IMAGE_DIMENSIONS = 36;
export const WINDOW = Dimensions.get('window');
export const HEIGHT = WINDOW.height;
export const WIDTH = WINDOW.width;
export const IS_IOS = Platform.OS == 'ios';
export const IS_ANDROID = Platform.OS == 'android';
