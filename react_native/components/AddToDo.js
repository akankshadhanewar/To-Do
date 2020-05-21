import React, {useState} from 'react';
import { TextInput, View, Button } from 'react-native';

export default function AddToDo({addItem}) {
    const[text, setText] = useState(" ");
    const changedList = (input) => {
        setText(input);
    }

  return (
    <View>
        <TextInput style= {{borderBottomWidth:1, borderColor:'black', marginBottom:10}}
        placeholder = "add text here...."
        onChangeText = {(input) => changedList(input)}
        />
        <Button title = "Add" onPress = {() => addItem(text)} />
    </View>
  );
}
 