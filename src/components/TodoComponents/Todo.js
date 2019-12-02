import React from "react";
import "./Todo.css"

class Todo extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

render(){
    return (
        <div
        onClick={() => this.props.complete(this.props.todo.id)}
        className={
            this.props.todo.completed ? "todo complete":"todo incomplete"}
            >
            {this.props.todo.task}
            </div>
         )
    }
}

export default Todo