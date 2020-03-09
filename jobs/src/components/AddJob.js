import React, { Component } from "react";
import PropTypes from "prop-types";

class AddJob extends Component {
  state = {
    name: "",
    job: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.name && this.state.job) {
      this.props.addJob({
        name: this.state.name,
        job: this.state.job
      });

      this.setState({
        name: "",
        job: ""
      });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div className="col">
            <input
              type="text"
              name="job"
              placeholder="Job"
              className="form-control"
              value={this.state.job}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Create" id="submit" className="btn btn-link" />
        </div>
      </form>
    );
  }
}

AddJob.propTypes = {
  addJob: PropTypes.func.isRequired
};

export default AddJob;
