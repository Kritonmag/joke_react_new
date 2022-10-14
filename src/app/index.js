import React from 'react';

import HeaderButton from '../header-btn';
import ItemAddTodos from '../imput-add-todos';
import ContentInput from '../input-add-form';
import PersonList from '../person-list';
import Title from '../title';
import TodoList from '../todo-list';

import './index.css'


export default class App extends React.Component {

  personId = 100;
  todoId = 100;

  state = {
    person: [
      this.createPersonItem('Daddy'),
      this.createPersonItem('Mom'),
      this.createPersonItem('Brother')
    ],  
    todoDaddy: [
      this.createTodo('Creat APP'),
      this.createTodo('Drink tea')
    ],
    todoMom: [
      this.createTodo('Diner'),
      this.createTodo('School')
    ],
    todoBrother: [
      this.createTodo('Walk a pet'),
      this.createTodo('Watch TV'),
      this.createTodo('Talk a important')
    ]
  };  


  createPersonItem(label) {
    return {
      label,
      id: this.personId++,
      pressedButton: false
    }
  }

  createTodo(label) {
    return {
      label,
      id: this.todoId++
    }
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {... oldItem,
      [propName]: !oldItem[propName]}
      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ]
  }

  todoAdd = (text) => {
    const newTodo = this.createTodo(text);
    this.setState(({todo}) => {
      const newArr = [
        ...todo, newTodo
      ];
      return {
        todo: newArr
      }
    })
  }

  todoDelete = (id) => {
    this.setState(({todo}) => {
      const idx = todo.findIndex((item) => item.id == id);
      const newArr = [
        ...todo.slice(0, idx),
        ...todo.slice(idx + 1)
      ];
      return {
        todo: newArr
      };
    })
  }
  
  onTogglePress = (id) => {
    this.setState(({person}) => {
      return {
        person: this.toggleProperty(person,id, 'pressedButton')
      }
    })
  }

  render() {
    const persons = this.state.person;
    const todoDaddy = this.state.todoDaddy;
    const todoMom = this.state.todoMom;
    const todoBrother = this.state.todoBrother;

    return (
      <div>
      <header className='header'>
        <Title />
        <HeaderButton />  
      </header>
      <div className='content'>
      <div className='content-person'>
          {/* <ContentInput/> */}
          <PersonList   
            persons={persons}
            onTogglePress={this.onTogglePress}/>
      </div>
      <div className='content-todos'>
        <ItemAddTodos 
        onTodoAdded={this.todoAdd}/>
        <TodoList 
          persons={persons}
          todoDaddy={todoDaddy}
          todoMom={todoMom}
          todoBrother={todoBrother}
          onDelete={this.todoDelete} />
        {/* {persons[0].pressedButton == true ?
          <TodoList todos={todoDaddy}
            onDelete={this.todoDelete}/> : console.log('wooops')} */}
      </div>
      </div>
      <footer className='footer'>
      <div className="footer-lf">
          <div className="footer-content-lf">Lorem ipsum dolor sit amet consectetur.</div>
        </div>
        <div className="footer-rg">
          <div className="footer-content-rg">write to us in TELEGRAM</div>
      </div>
      </footer>
    </div>
    )  
  }
}