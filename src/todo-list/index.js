import React from 'react';
import Todos from '../todos';

import './index.css'

const TodoList = ({persons, todoDaddy, todoMom, todoBrother, onDelete}) => {
  
  const elements = persons.map((item) => {
    const {id, pressedButton} = item;
    if (pressedButton == true && id == 100) {
      const {label, id} = todoDaddy
      return (
      <li key={item.id}>
        <Todos 
        todo={label} 
        onDelete={()=> onDelete(item.id)}/>
      </li>
      )
    }
    if (pressedButton == true && id == 101) {
      return (
        <li key={item.id}>
          <Todos 
          todo={todoMom.label} 
          onDelete={()=> onDelete(item.id)}/>
        </li>
        )
    }
    if (pressedButton == true && id == 102) {
      return (
        <li key={item.id}>
          <Todos 
          todo={todoBrother.label} 
          onDelete={()=> onDelete(item.id)}/>
        </li>
        )
    }
  })

  // const elements = todos.map((item) => {
  //   const {id, ...itemProps} = item;

  //   return (
  //     <li key={item.id}>
  //       <Todos 
  //       { ... itemProps}
  //       onDelete={()=> onDelete(item.id)}/>
  //     </li>
  //   )
  // })
  
  return (
    <ul className='todo-list'>
      {elements}
    </ul>
  )
}

export default TodoList