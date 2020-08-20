import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const TodoInsert = ({onAddTodo}) => {
  //사용자가 입력한 텍스트값 상태
  const [newTodoItem, setNewTodoItem] = useState('');

  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

  const addTodoHandler = () => {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  };

  return (
    <View style={styles.inputArea}>
      <TextInput 
          style={styles.textInputBox}
          placeholder="할 일 적어라"
          value={newTodoItem}
          onChangeText={todoInputHandler}
          autoCorrect={false} />
      <View style={styles.addButton}>
        <Button 
          title={'ADD'}
          onPress={addTodoHandler}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    inputArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      textInputBox: {
        flex: 1,
        fontSize: 18,
        padding: 10,
        borderWidth: 1,
        borderColor: '#bbb',
        margin: 10,
      },
      addButton: {
        color: '#fff',
        fontSize: 18,
        marginRight: 10,
      },
});

export default TodoInsert;