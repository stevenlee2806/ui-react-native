import { Dimensions } from 'react-native';
export const baseScreenWidth = 375;
export const baseScreenHeight = 733;

const { width, height } = Dimensions.get('window');
export const screenWidth = width;
export const screenHeight = height;
export const convertWidth = (pd: number) => {
    return (pd / baseScreenWidth) * screenWidth;
  };
  
  export const convertHeight = (pd: number) => {
    return (pd / baseScreenHeight) * screenHeight;
  };
  