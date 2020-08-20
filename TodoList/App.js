import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, Button } from 'react-native';

import TodoInsert from './components/ToDoInsert';
import TodoList from './components/ToDoList';


const App = () => {
  //todos: {id: Number, textValue: string }
  const [ todos, setTodos ] = useState([]);
  
  //할 일 목록 추가하는 기능 구현
  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text },
    ]);
  };

  //리스트 삭제하기
  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TodoInsert onAddTodo={addTodo} />
      <TodoList todos={todos} onRemove={onRemove}/>
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
