import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import axios from 'axios';

import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      /*{
        id: 1,
        title: "title1",
        completed: false
      },
      {
        id: 2,
        title: "title2",
        completed: false
      },
      {
        id: 3,
        title: "title3",
        completed: true
      }*/
    ]
  };

  componentDidMount() {
    /*axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then(response => console.log(response.data));*/

    fetch('https://jsonplaceholder.typicode.com/todos?_limit=14')
    .then(response => response.json())
    .then(json => this.setState({ todos: json }))
  }

  markComplete = (id) => {
    console.log(id);

    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    }) });
  }

  deleteTodo = (id) => {    
    axios.delete('https://jsonplaceholder.typicode.com/todos/' + {id})
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
    //this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    })
    .then(response => this.setState({ todos: [...this.state.todos, response.data] }))
    .catch(error => console.log(error));
    /*
    const newTodo = {
      id: Math.floor(Math.random() * 1000), //just for testing
      title: title,
      completed: false,
    }*/    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos 
                todos={this.state.todos} 
                markComplete={this.markComplete} 
                deleteTodo={this.deleteTodo} 
              />
            </React.Fragment>
          ) } />

          <Route path="/about" component={About} />
          
        </div>
      </Router>
    );
  }
}

export default App;
