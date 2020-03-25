import React, { Component } from "react";
import CategoryForm from "./CategoryForm";
import QuestionSet from "./QuestionSet";
import Menu from "./Menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class Quiz extends Component {
  state = {
    questions: [
      {
        id: 1,
        category: 0,
        question: "Who won world hockey tournament in 2019?",
        answers: [
          {
            correct: false,
            option: "USA"
          },
          {
            correct: false,
            option: "Canada"
          },
          {
            correct: true,
            option: "Finland"
          },
          {
            correct: false,
            option: "Sweden"
          }
        ]
      },
      {
        id: 2,
        category: 0,
        question: "Who won euro cup tournament in 2018?",
        answers: [
          {
            correct: false,
            option: "Spain"
          },
          {
            correct: false,
            option: "Croatia"
          },
          {
            correct: true,
            option: "France"
          },
          {
            correct: false,
            option: "Germany"
          }
        ]
      }
    ],
    categories: [
      {
        id: 0,
        name: "Sport"
      },
      {
        id: 1,
        name: "Art"
      }
    ],
    selectedCategory: -1,
    selectedQuestions: [],
    score: 0,
    gameRunning: false
  };

  selectCategory = c => {
    this.setState({ selectedCategory: c });
    const questions = this.state.questions.filter(
      ({ category }) => category == c
    );

    this.setState({
      selectedQuestions: questions,
      gameRunning: true
    });
  };

  addPoints = points => {
    const score = this.state.score + points;
    this.setState({ score: score });
  };

  resetGame = () => {
    this.setState({
      selectedCategory: -1,
      score: 0,
      selectedQuestions: [],
      gameRunning: false
    });

    return <Redirect to="/quiz" />;
  };

  render() {
    let category = { name: "" };
    if (this.state.selectedCategory > -1)
      category = this.state.categories.find(
        ({ id }) => id == this.state.selectedCategory
      );

    return (
      <div>
        <Menu
          score={this.state.score}
          category={category}
          resetGame={this.resetGame}
        />

        <Router>
          <Switch>
            <Route path="/quiz/start">
              {this.state.gameRunning === false ? (
                <Redirect to="/quiz" />
              ) : (
                <QuestionSet
                  questions={this.state.selectedQuestions}
                  addPoints={this.addPoints}
                />
              )}
            </Route>

            <Route path="/quiz/">
              {this.state.gameRunning === true ? (
                <Redirect to="/quiz/start" />
              ) : (
                <CategoryForm
                  categories={this.state.categories}
                  selectCategory={this.selectCategory}
                />
              )}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Quiz;
