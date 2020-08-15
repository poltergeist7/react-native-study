// components/TodoListItem.js
import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const TodoListItem = () => {
  return (
    <View style={styles.container}>
      <Text>TodoList items will be shown here</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TodoListItem;