import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends React.Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        todo={todo}
        key={todo.id}
        markComplete={this.props.markComplete}
        deleteTodo={this.props.deleteTodo}
      />
    ));
  }
}
//markComplete={this.props.markComplete} - called from todoitem -> calling app component

// PropTypes - validator
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default Todos;
