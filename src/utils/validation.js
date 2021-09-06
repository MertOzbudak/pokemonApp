import AsyncStorage from '@react-native-async-storage/async-storage';

export function isStringEmpty(item) {
  return item == null || item === undefined || item === '';
}

export function isArrayEmpty(item) {
  return item === null || item === undefined || item.length === 0;
}

export function colorPicker(color){
  switch(color){
      case 'black': {
          return '#2e2d2d'
      }
      case 'blue': {
          return '#99ccff'
      }
      case 'brown': {
          return '#cc6600'
      }
      case 'gray': {
          return '#d6d6c2'
      }
      case 'green': {
          return '#99ff99'
      }
      case 'pink': {
          return '#ffb3ff'
      }
      case 'purple': {
          return '#cc99ff'
      }
      case 'red': {
          return '#ff9999'
      }
      case 'white': {
          return '#cccccc'
      }
      case 'yellow': {
          return '#ffd699'
      }
      default:{
          return '#b3ffb3'
      }
  }
}

export async function getAsyncData(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function setAsyncData(key, value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log(error.message);
  }
}

export async function removeAsyncData(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error.message);
  }
}
