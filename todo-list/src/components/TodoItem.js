import React from "react";
import PropTypes from "prop-types";

class TodoItem extends React.Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  // data must be changed in relevant component - cant have markComplete() here
  render() {
    const { id, title } = this.props.todo;

    return (
      <p style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
        />

        {title}

        <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>
          Delete
        </button>
      </p>
    ); // instead of id and title - this.props.todo.title
  }
}
//onChange={this.props.markComplete} - call methond in parent component
//.bind(this, id) - setting parameter

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

const btnStyle = {
  backgroundColor: "#ff0000",
  color: "#ffffff",
  border: "none",
  padding: "5px",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
