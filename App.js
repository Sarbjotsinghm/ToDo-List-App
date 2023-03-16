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
  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{item.text}</Text>
    </TouchableOpacity>
  );
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 22,
    flex: 1,
    // marginVertical: 8,
  },
  title: {
    fontSize: 30,
  },
  input: {
    height: 42,
    flex: 1,
    margin: 14,
    borderWidth: 1,
    padding: 12,
  },
  addWrapper: {
    width: 38,
    height: 38,
    backgroundColor: '#FFF',
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  TaskWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 11,
  },
  mark: {
    fontSize: 18,
  },
  todo: {
    flexDirection: 'row',
    marginHorizontal: 22,
  },
  deletedButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 22,
    color: 'white',
  },
  deletedText: {
    color: 'white',
  },
  heading: {
    fontSize: 44,
    color: 'brown',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App;
