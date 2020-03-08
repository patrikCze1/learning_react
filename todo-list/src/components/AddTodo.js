import React from "react";
import PropTypes from "prop-types";

class AddTodo extends React.Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={formStyle}>
        <input
          type="text"
          name="title"
          placeholder="Todo"
          style={{ flex: 2 }}
          value={this.state.title}
          onChange={this.onChange}
        />

        <input type="submit" value="Add" className="btn" style={{ flex: 2 }} />
      </form>
    );
  }
}

const formStyle = {
    margin: '15px 0px',
    display: "flex"
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
