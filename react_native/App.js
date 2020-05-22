import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Item from './components/Item';
import AddItem from './components/AddItem';

export default function App() {
  const [todos, setToDo] = useState([]);

  const del = (iname) => {
    setToDo((newList) => {
      return newList.filter(todo => todo.name !== iname) 
    });
  }

  // const add = (iname, idate) => {
  //   // console.log(iname+","+iname.length);
  //   // console.log("Date" +idate.value);
  //   setToDo((newList) => {
  //     if(iname.length === 0 || idate.value === undefined){
  //       alert("Please enter the task details");
  //       return[...newList];
  //     }
  //     for(let i = 0; i<newList.length; i++){
  //       if(newList[i].name === iname){
  //         alert("The task name is already their in the list.");
  //         return[...newList];
  //       }
  //     }
  //     return[
  //       ...newList,
  //       {name : iname, date: idate.value, checked: false}
  //       // checked: false, date: new Date()
  //     ]
  //   });
  // }

  const add = (iname) => {
    // console.log(iname+","+iname.length);
    // console.log("Date" +idate.value);
    setToDo((newList) => {
      if(iname.length === 0){
        alert("Please enter the task details");
        return[...newList];
      }
      for(let i = 0; i<newList.length; i++){
        if(newList[i].name === iname){
          alert("The task name is already their in the list.");
          return[...newList];
        }
      }
      return[
        ...newList,
        {name : iname, checked: false}
        // checked: false, date: new Date()
      ]
    });
  }


  const mark = (id) => {
    
    setToDo((newList) => {
      for(let i = 0; i<newList.length; i++){
        if(newList[i].name === id){
          newList[i].checked = true;
          // console.log("newList[i].name"+newList[i].name); 
          // console.log("newList[i].checked"+newList[i].checked);
        }
      }
      return[...newList];
    });
  }


  
  return (
    <View style = {{backgroundColor: '#fff', alignItems: 'center', paddingTop: 50}}>
      {/* <div style = {{textAlign:'center'}}> */}
      {/* Heading */}
      <Text style={{fontSize: 30, backgroundColor: 'pink'}}>My To-Do List</Text>
      {/* <div>&nbsp;</div> */}
      {/* Add To-do */}
      <AddItem addItem = {add} />
      {/* <div style={{fontSize:8}}>&nbsp;</div> */}
      {/* List of To-do delete button */}
      <FlatList 
      data = {todos}
      renderItem = {({item}) => <Item item = {item}  deleteItem = {del} markItem = {mark}/>}
      keyExtractor = {item => item.name}
      />
      {/* </div> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 100
  },
});
