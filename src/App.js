/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ScrollView,
  Keyboard
} from "react-native";
import ToDoItem from "./components/todoitem";

export default class App extends Component {
  state = {
    todolist: [
      { id: "1", desc: "Brush Teeth" },
      { id: "2", desc: "Face wash" },
      { id: "3", desc: "Nail Cut" },
      { id: "4", desc: "Play Pubg" },
      { id: "5", desc: "Sleep" }
    ],
    addText: "",
    error: "",
    count: 1
  };

componentDidMount(){
  this.setState({count: this.state.todolist.length});
  console.log(this.state.todolist);
}

     addTodoItem = () => {
          //include your validation inside if condition
          this.setState({count: this.state.count++});
         if (this.state.addText == "") {
            this.setState({error: "Please fill the above text box !"});
          }
          else {
            this.setState({error: ""});
            const id = this.state.todolist.length + 1;
            const todolist = Object.assign([], this.state.todolist);
            todolist.push({ id: id, desc: this.state.addText });

            this.setState({ todolist: todolist });
            console.log(this.state.todolist);
              Keyboard.dismiss();
              // navigate to next screen

          }


  };

  deleteTodoItem = (index, e) => {
    const todolist = Object.assign([], this.state.todolist);

    todolist.splice(index, 1);

    this.setState({ todolist: todolist });
  };

  updateTodoItem = (id, event) => {
    // Find index in Todo List
    console.log(event);
    const index = this.state.todolist.findIndex(todo => {
      return todo.id == id;
    });

    // Create copy of the perticular ToDoItem
    const todoitem = Object.assign({}, this.state.todolist[index]);

    // Update the description of the ToDo Item
    todoitem.desc = event;

    // Create copy of the all ToDo Lists
    const todolist = Object.assign([], this.state.todolist);

    // Update the ToDo List with the updated value
    todolist[index] = todoitem;

    // Update the Real state with modified list
    this.setState({ todolist: todolist });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>To Do App</Text>
        <View style={styles.todolist}>
        <TextInput
          placeholder="Type here"
          style={{ backgroundColor: "#ddd" }}
          onChangeText={text => this.setState({ addText: text })}
          value={this.state.addText}
        />
        <Text style={{color: 'red'}}>{this.state.error}</Text>
        </View>
        <Button title="+" onPress={this.addTodoItem} />
        <ScrollView>
        <View style={styles.todolist}>
          {this.state.todolist.map((todoitem, index) => {
            return (
              <ToDoItem
                key={todoitem.id}
                deleteFunc={this.deleteTodoItem.bind(this, index)}
                updateFunc={this.updateTodoItem.bind(this, todoitem.id)}
                todoitem={todoitem}
              />
            );
          })}
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 30,
    textAlign: "center",
    margin: 10
  },
  todolist: {
    textAlign: "left",
    color: "#333333",
    padding: 20,
    marginBottom: 5
  }
});
