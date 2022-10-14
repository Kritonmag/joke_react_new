import React from 'react';
import './index.css'

export default class PersonItem extends React.Component {

  handelClick = () => {
    const {onTogglePress, id} = this.props;
    onTogglePress(id); 
  }

  render() {
      const {label, pressedButton} = this.props;
      let classNames = 'person-item';
      if(pressedButton) {
        classNames += ' click'
      }

    return (
      <div className='item'>
        <div
          className={classNames}
          onClick={this.handelClick}> 
            {label}
        </div>
      </div>
    )
  }
}