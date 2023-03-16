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
    </View>
  );
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
