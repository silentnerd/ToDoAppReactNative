import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const styles = StyleSheet.create({
  todoitemrow: {
    flexDirection: "row",
    justifyContent: 'center',
    margin: 10
  },
  deleteBtn: {
    width: 20
  },
  updateInput: {
    width: 250,
    paddingLeft: 20,
    backgroundColor: "#ddd"
  },
  todoitem: {
    fontSize: 20,
    width: 180,
    padding: 10
  }
});

const ToDoItem = props => {
  return (
    <View style={styles.todoitemrow}>

      <TextInput
        style={styles.updateInput}
        onChangeText={props.updateFunc}
        value={props.todoitem.desc}
      />
      <Button
        style={styles.deleteBtn}
        title="Delete"
        onPress={props.deleteFunc}
      />
    </View>
  );
};

export default ToDoItem;
