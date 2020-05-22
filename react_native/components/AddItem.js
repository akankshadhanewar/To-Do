import React, {useState} from 'react';
import { TextInput, View, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';
// import { DateInput } from 'react-native-date-input';

export default function AddItem({addItem}) {
    const[text, setText] = useState("");
    const[date, setDate] = useState("");
    
    const displayTask = (input) => {
        setText(input);
    }

    // const displayDate = () => {
    //   const newdate =document.querySelector('input[type="date"]');
    //   //console.log("New Date"+newdate.value)
    //   setDate(newdate);
    // }   

  return (
    <View>
        <TextInput style= {{borderWidth:1, borderColor:'black', margin:10, fontSize:18}}
        placeholder = "add text here...."
        onChangeText = {(input) => displayTask(input)}
        />
        {/* <DatePicker style={{width: 200}}
        format="DD-MM-YYYY"
          minDate="01-01-2019"
          maxDate="01-01-2025"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
        <Input style= {{borderWidth:1, borderColor:'black', margin:10, fontSize:18}} 
        type="date" placeholder="Duedate" onChange = {(input) => displayDate(input)}></Input> */}
        <Button title = "Add" onPress = {() => addItem(text)} />
    </View>
  );
}
 