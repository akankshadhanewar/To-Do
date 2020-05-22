import React, { Component } from 'react';
import { Text,View,Button ,TouchableOpacity} from 'react-native';

export default class Item extends Component {
  constructor(props){
    super(props);
  }

  render() {
    // console.log(this.props.item.checked)
    return (
      <View style={{padding:10}}>  
      <TouchableOpacity style={{width:100,height:100, marginTop :5}}>
        <Text style = {{fontSize:18, marginBottom:5}}>{this.props.item.name}</Text>
        {/* <Text style = {{fontSize:18}}>{this.props.item.date}</Text> */}
        {/* <div style = {{fontSize:5}}>&nbsp;</div> */}
        <Button title = "delete" onPress={() => this.props.deleteItem(this.props.item.name)}></Button>
        {/* <div style = {{fontSize:5}}>&nbsp;</div> */}
        <Button title = {this.props.item.checked ? "Marked" : "Mark"} onPress={() => this.props.markItem(this.props.item.name)}></Button>
        {/* <div style = {{fontSize:8}}>&nbsp;</div>  */}
      </TouchableOpacity>
      </View>
    );
  }
}
