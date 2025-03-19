import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveStorage = async (name: string, value: any) => {
    const newSaveDatas = {
      name: name,
      value: value
    }
    const saveDatasString = JSON.stringify(newSaveDatas);
    try {
      await AsyncStorage.setItem(
        'testData',
        saveDatasString
      );
    } catch (error) {
      console.log(error);
    }
  }

  export const loadStorage = async (settter: React.Dispatch<React.SetStateAction<Map<any, any>>>) => {
    try {
      const loadDatasString = await AsyncStorage.getItem('testData');
      if(loadDatasString) {
        settter(JSON.parse(loadDatasString));
      }
    } catch (error) {
      console.log(error);
    }
  }