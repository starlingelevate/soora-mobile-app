import AsyncStorage from '@react-native-async-storage/async-storage'

class StorageService {

  public static async storeData(key:string , value: any) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
        throw error;
    }
  }

  public static async getData(key:string = '', defaultValue = null) {
    try {
      const value = await AsyncStorage.getItem(key);

      if (value !== null) {
        return value;
      }

      return defaultValue;
    } catch (error) {
        return defaultValue;
    }
  }

  public static async removeData(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      // Error retrieving data
    }
  }


  public static async reset() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      // Error retrieving data
    }
  }
}

export default StorageService;
