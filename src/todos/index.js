import React from 'react';
import './index.css'

export default class Todos extends React.Component {

  render() {
    const {label,onDelete} = this.props;

    return (
      <div className='flex'>
        <div
        className='todo-item'>
          {label}
        </div>
        <button
          className='button-item delete'
          onClick={onDelete}>
            Del
        </button>
      </div>
    )
  }
}