import AsyncStorage from '@react-native-async-storage/async-storage';

export function isStringEmpty(item) {
  return item == null || item === undefined || item === '';
}

export function isArrayEmpty(item) {
  return item === null || item === undefined || item.length === 0;
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
