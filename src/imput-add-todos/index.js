import React from 'react';

import './index.css'

export default class ItemAddTodos extends React.Component {
  
  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault()
    this.props.onTodoAdded(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className='flex'
        onSubmit={this.onSubmit}
        >
          <input className='todos-input'
            placeholder='What needs to be done'
            type='text'
            onChange={this.onLabelChange}
            value={this.state.label}
          />
        <button
          className='todos-button'>
          Add
        </button>
      </form>
    )
  }
}