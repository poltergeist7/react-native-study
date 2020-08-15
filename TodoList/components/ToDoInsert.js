import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const TodoInsert = () => {
    return (
      <View style={styles.inputArea}>
        <TextInput 
            style={styles.textInputBox}
            placeholder="To do List" />

        <Button
            style={styles.button} 
            title={'ADD'}/>
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
        fontSize: 26,
        padding: 10,
        borderWidth: 1,
        borderColor: '#bbb',
        margin: 10,
      },
      button: {
        marginRight: 10,
      },
});

export default TodoInsert;