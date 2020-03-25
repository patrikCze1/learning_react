import React, { Component } from 'react';

class CategoryForm extends Component {
    state = {
        category: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.category) {
            this.props.selectCategory(this.state.category);
            this.setState({category: ''});
            console.log('start');
        }
        
        console.log('select category');
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    render() {
        const categories = this.props.categories;
        const options = categories.map(category => {
            return <option value={category.id}>{category.name}</option>
        })
        return (
            <form onSubmit={this.onSubmit}>
                <select name="category" onChange={this.onChange} required>
                    <option disabled selected>Choose category</option>
                    {options}
                </select>
                <input type='submit' value="Select" />
            </form>
        );
    }
}

export default CategoryForm;