import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList"
import "./components/TodoComponents/Todo"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state ={
      todos: [
        {
          task: "Back Workout",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Chest Workout",
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  
  handleClear = () =>{
    this.setState({
      todos: this.state.todos.filter(todo =>{
        return !todo.completed;
      })
    })
  }

  handleCompleted = id =>{
    this.setState({
      todos: this.state.todos.map(todo =>{
        if (id === todo.id){
          return {...todo, completed: !todo.completed }
        }else{
          return todo
        }
      })
    })
  }

  addTodo = todo => {
    this.setState({
      todos:[
        ...this.state.todos, 
        {
          task: todo,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  render() {
    return (
      <div className="app">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo = {this.addTodo} clear = {this.handleClear}/>
        <TodoList todos ={this.state.todos} complete = {this.handleCompleted}/>
      </div>
    );
  }
}

export default App;
