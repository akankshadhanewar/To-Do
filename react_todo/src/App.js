import React from 'react';
import './App.css';

function App() {
  return (
    <div className = "App">
      <Todo/>
    </div>
  );
}

class Todo extends React.Component{
  constructor(props) {
  super(props);
    this.state={
      tasklist:[],
      text:"",
      date:"",
      disabled:false
    };
    this.addTask = this.addTask.bind(this);
    this.displayText=this.displayText.bind(this);
    this.displayDate=this.displayDate.bind(this);
    this.deleteTask=this.deleteTask.bind(this);
    this.markTask=this.markTask.bind(this);
  }

  addTask(){
    var n = this.state.text
    if(n.length === 0){
      alert("Task feild cannot be empty")
      return;
    }
    var d = this.state.date
    if(d.length === 0){
      alert("Date feild canot be empty")
      return;
    }
    var dict={}
    dict["name"]=n;
    dict["date"]=d;
    this.setState({
      tasklist:[...this.state.tasklist,dict]
    });
  }

  displayDate(date_val){
    var value_d = date_val.target.value;
    this.setState({
      date:value_d
    });
  }

  displayText(task_val){
    var value_t = task_val.target.value;
    this.setState({
      text:value_t
    });
  }
  
  deleteTask(task){
    var newList = [...this.state.tasklist];
    var task_n = task.target.id;
    var index=0;
    for(let i = 0; i<newList.length; i++){
      if((newList[i].name) === task_n){
        index = i;
      }
    }
    newList.splice(index,1);
    this.setState({
      tasklist:[...newList]
    })
  }

  markTask(task) {
    this.setState({disabled:true});
  }

  render(){
    return(
      <div className="App-header">
        <h1>Todo List</h1>
        <input type="text" placeholder="Enter your task" onChange={this.displayText}></input>&nbsp;
        <input type="date" placeholder="Duedate" onChange={this.displayDate}></input>&nbsp;
        <button onClick={this.addTask}>Add task</button>
        <ul>
          {this.state.tasklist.map((value) => {
            return(
              <div>
              {value["name"]+" "+value["date"]}&nbsp;
              <button onClick={this.deleteTask} id={value["name"]}>Delete</button>&nbsp;
              <button onClick= {this.markTask} disabled={this.state.disabled} id={value["name"]}>Checked</button>
              </div>);
          })}
        </ul>
      </div>
    );
  }
}

export default App;