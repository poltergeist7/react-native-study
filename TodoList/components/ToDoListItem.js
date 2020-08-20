// components/TodoListItem.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoListItem = ({textValue, id, onRemove}) => {
  return (
    <View style={styles.container}>
    
      <Text style={styles.listText}>{textValue}</Text>
      
      <TouchableOpacity>
        <View>
          <Text 
            style={styles.button}
            onPress={onRemove(id)}>
            Delete
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 18,
    marginRight: 12,
    marginLeft: 12,
    marginBottom: 10,
  },
  listText: {
    flex: 5,
    width: 100,
    fontSize: 18,
  },
  button: {
    flexDirection: 'row',
    flex: 5,
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#20b2aa',
    padding: 10,
  },
});

export default TodoListItem;