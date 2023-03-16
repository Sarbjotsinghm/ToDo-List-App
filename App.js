import React, {useEffect, useState, useRef, Button} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [todos, fixTodos] = React.useState([]);
  let newText = '';

  const renderlist = ({item}) => {
    const backgroundColor = item.Done ? 'white' : 'white';
    const color = item.Done ? '#DADADA' : 'black';

    const DoneItem = id => {
      console.log(id);
      const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.Done = !todo.Done;
        }
        return todo;
      });
      console.log(updatedTodos);
      fixTodos(updatedTodos);
    };

    return (
      <View style={styles.todo}>
        <Item
          key={item.id}
          item={item}
          onPress={() => DoneItem(item.id)}
          backgroundColor={backgroundColor}
          textColor={color}
          style={styles.listItem}
        />
        <TouchableOpacity
          onPress={() => handleDeleteTodo(item.id)}
          style={styles.deletedButton}>
          <View>
            <Text style={styles.deletedText}>delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const addTodo = () => {
    fixTodos([...todos, {id: Date.now(), text: newText, Done: false}]);
  };

  const handleDeleteTodo = id => {
    fixTodos(todos.filter(todo => todo.id !== id));
    console.log();
  };

  const Header = () => {
    return (
      <>
        <Text style={styles.heading}>T</Text>
        <View style={styles.TaskWrapper}>
          <TextInput
            style={styles.input}
            placeholder={'Write a List...'}
            onChangeText={text => (newText = text)}
          />
          <TouchableOpacity onPress={addTodo}>
            <View style={styles.addWrapper}>
              <Text style={styles.mark}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderlist}
        keyExtractor={item => item.id}
        ListHeaderComponent={Header}
      />
    </SafeAreaView>
  );
};
