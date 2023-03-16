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
