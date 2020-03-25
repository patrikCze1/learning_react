import React, { Component } from 'react';

class Answer extends Component {
    onClick = (correct) => {
        if (correct) {
            console.log('correct')
            this.props.addPoints(100);
            this.props.nextQuestion();
        } else {
            console.log('wrong')
            this.props.addPoints(-100);
        }
    }

    render() {
        const { option, correct } = this.props.answer;
        return (
            <button onClick={this.onClick.bind(this, correct)}>
                {option}
            </button>
        );
    }
}

export default Answer;