import React, { Component } from 'react';
import { Text,View,Button } from 'react-native';

export default class ToDoItem extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style = {{paddingBottom:10}}>
        <Text>{this.props.item.name}</Text>
        <Button title = "remove" onPress={() => this.props.deleteItem(this.props.item.name)}></Button>
      </View>
    );
  }
}