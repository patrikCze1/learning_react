import React, { Component } from 'react';

class Menu extends Component {
    render() {
        const {score, category} = this.props;

        return (
            <div>
                Score: {score}
                Category: {category.name}
                <button onClick={this.props.resetGame}>Reset</button>
            </div>
        );
    }
}

export default Menu;