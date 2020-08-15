// components/TodoList.js
import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

import TodoListItem from './ToDoListItem';

const TodoList = () => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <TodoListItem />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;