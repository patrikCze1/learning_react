import React, { Component } from "react";
import { connect } from "react-redux";
import { addProfile } from "../../actions/profileActions";

class ProfileForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    tel: "",
    age: "",
    about: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.tel !== "" &&
      this.state.age &&
      this.state.about
    ) {
      this.props.dispatch(
        addProfile({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          tel: this.state.tel,
          age: this.state.age,
          about: this.state.about,
        })
      );
      this.setState({
        firstName: "",
        lastName: "",
        tel: "",
        age: "",
        about: "",
      });
    } else {
        alert('fill all inputs')
    }
  };

  render() {
    return (
      <div className="hidden-form">
        <form onSubmit={(e) => this.onSubmit(e)}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="first_name"
                type="text"
                className="validate"
                name="firstName"
                onChange={(e) => this.onChange(e)}
                value={this.state.firstName}
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                id="last_name"
                type="text"
                className="validate"
                name="lastName"
                onChange={(e) => this.onChange(e)}
                value={this.state.lastName}
              />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                id="tel"
                type="tel"
                className="validate"
                name="tel"
                onChange={(e) => this.onChange(e)}
                value={this.state.tel}
              />
              <label htmlFor="tel">Tel</label>
            </div>
            <div className="input-field col s6">
              <input
                id="age"
                type="number"
                className="validate"
                name="age"
                onChange={(e) => this.onChange(e)}
                value={this.state.age}
              />
              <label htmlFor="age">Age</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="textarea1"
                className="materialize-textarea"
                onChange={(e) => this.onChange(e)}
                name="about"
                value={this.state.about}
              ></textarea>
              <label htmlFor="textarea1">About</label>
            </div>
          </div>
          <input type="submit" value="Add" className="btn" />
        </form>
      </div>
    );
  }
}

export default connect()(ProfileForm);
