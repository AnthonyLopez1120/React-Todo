// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo"

class TodoList extends React.Component {
  
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                {this.props.todos.map(todo => (
                    <Todo key={todo.id} todo={todo} complete={this.props.complete}/>
                ))}
            </div>
        )
    }
}

export default TodoList