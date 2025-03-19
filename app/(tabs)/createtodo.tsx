import { Image, StyleSheet, Platform, TextInput, Button } from 'react-native';

import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { loadStorage, saveStorage } from '@/helpers/storage';

export default function CreateTodoScreen() {
  const [form, setForm] = useState({
    title: '',
    content: '',
  })
  const [saveDatas, setSaveDatas] = useState(new Map());

  useEffect(() => {
    loadStorage(setSaveDatas)
  }, [])
  
  const submit = () => {
    router.push('/(tabs)')
    setSaveDatas((data) => {
      // const todoList = data.todoList

      
      return data
    })
    saveStorage('todoList', saveDatas)
  }
  
    return <Animated.ScrollView style={styles.todoList}>
        <ThemedView>
          <ThemedText type="title">CreateTodo</ThemedText>
          <ThemedText >タイトル</ThemedText>
          <TextInput onChangeText={(text) => setForm(form => ({...form, title: text}))} style={styles.input}  />
          <ThemedText >内容</ThemedText>
          <TextInput onChangeText={(text) => setForm(form => ({...form, contnet: text}))} style={styles.input}  />
          <Button 
          title="Submit"onPress={submit}>
          </Button>
        </ThemedView>
    </Animated.ScrollView>
}

const styles = StyleSheet.create({
  titleContainer: {
  },
  title: {
    paddingTop: 32,
  },
  todoList: {
    paddingTop: 24
  },
  input: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#000'
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
