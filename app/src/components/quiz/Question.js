import React, { Component } from 'react';

class Question extends Component {
    render() {
        const { question } = this.props.question;
        return (
            <div>
                {question}
            </div>
        );
    }
}

export default Question;