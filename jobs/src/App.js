import React from "react";
import Table from "./components/Table";
import AddJob from "./components/AddJob";
import Api from "./Api";

import "./App.css";

class App extends React.Component {
  state = {
    jobs: [
      {
        name: "Joe",
        job: "baker"
      },
      {
        name: "Mia",
        job: "chef"
      },
      {
        name: "Frank",
        job: "teacher"
      }
    ]
  };

  deleteJob = index => {
    const { jobs } = this.state;

    this.setState({
      jobs: jobs.filter((job, i) => {
        return i !== index;
      })
    });
  };

  addJob = job => {
    const { jobs } = this.state;

    this.setState({
      jobs: [...jobs, job]
    });
    console.log('job added');
  }

  render() {
    return (
      <div className="App container">
        <AddJob addJob={this.addJob} />
        <Table jobs={this.state.jobs} deleteJob={this.deleteJob} />
        <Api />
      </div>
    );
  }
}

export default App;
