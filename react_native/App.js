import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ToDoItem from './components/ToDoItem';
import AddToDo from './components/AddToDo';

export default function App() {
  const [todos, setToDo] = useState([]);

  const del = (iname) => {
    setToDo((newList) => {
      return newList.filter(todo => todo.name !== iname) 
    });
  }

  const add = (iname) => {
    setToDo((newList) => {
      for(let i = 0; i<newList.length; i++){
        console.log(i);
        console.log(newList[i].name)
        console.log(iname)
        if(newList[i].name === iname){
          alert("The task name is already their in the list.");
          return[...newList];
        }
      }
      return[
        ...newList,
        {name : iname, checked: false, date: new Date()}
      ]
    });
  }
  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={{fontSize: 30, backgroundColor: 'pink'}}>My To-Do List</Text>
      <div>&nbsp;</div>
      {/* Add To-do */}
      <AddToDo addItem = {add} />
      {/* List of To-do delete button */}
      <FlatList
      data = {todos}
      renderItem = {({item}) => <ToDoItem item = {item} deleteItem = {del}/>}
      keyExtractor = {item => item.name}
      />
      {/* list of to-do - delete button */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'left',
    paddingTop: 150
  },
  // text:{
  //   fontSize: 30,
  //   backgroundColor: 'pink'
  // }
});
