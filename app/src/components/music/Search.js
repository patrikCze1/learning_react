import React, { Component } from 'react';

class Search extends Component {
    state = {
        name: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchSong(this.state.name);
        this.setState({name: ''});
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="uk-search">
                <input type="search" name="name" className="uk-search-input" value={this.state.name} onChange={this.handleChange} />
                
            </form>
        );
    }
}

export default Search;