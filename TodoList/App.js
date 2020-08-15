import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, Button } from 'react-native';

import TodoInsert from './components/ToDoInsert';
import TodoList from './components/ToDoList';


const App = () => {
  //todos: {id: Number, textValue: string, checked: boolean }

  const [ todos, setTodos ] = useState([]);
  
  //할 일 목록 추가하는 기능 구현
  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TodoInsert />
      <TodoList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
