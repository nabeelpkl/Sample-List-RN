import { Dimensions } from "react-native";

export function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 75
};