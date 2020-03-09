import React, { Component } from 'react';

class Api extends Component {
    state = {
        data: [],
    }

    componentDidMount() {
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*';

        fetch(url)
            .then(res => res.json())
            .then(res => this.setState({
                data: res
            }))
            .catch(err => console.log(err));
    }

    render() {
        const {data} = this.state;

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        });

        return (
            <ul>
                {result}
            </ul>
        );
    }
}

export default Api;