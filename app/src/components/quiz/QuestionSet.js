import React, { Component } from 'react';
import Answer from './Answer';
import Question from './Question';

class QuestionSet extends Component {
    state = {
        questionNumber: 1
    }

    nextQuestion = () => {
        const questionNumber = this.state.questionNumber;
        if (questionNumber < this.props.questions.length) {
            this.setState({questionNumber: questionNumber + 1})
        } else {
            console.log('you won')
        }
    }

    render() {
        const questions = this.props.questions;
        const {questionNumber} = this.state;

        const answers = questions[questionNumber - 1].answers.map((answer, index) => {
            return <Answer answer={answer} key={index} addPoints={this.props.addPoints} nextQuestion={this.nextQuestion} />;
        });
        return (
            <div>
                Question number: {questionNumber - 1}
                <Question question={questions[questionNumber - 1]} />
                {answers}
            </div>
        );
    }
}

export default QuestionSet;