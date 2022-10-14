import React from 'react';
import PersonItem from '../person-item';

import './index.css';

const PersonList =({persons,onTogglePress}) => {

  const elements = persons.map((item) => {
    const {id, ...itemProps} = item;

    return (
      <li key = {item.id}>
        <PersonItem 
          { ... itemProps}
          onTogglePress={() => onTogglePress(item.id)}/>
      </li>
    )
  })
  return (
    <ul className='person-list'>
      {elements}
    </ul>
  )
}

export default PersonList