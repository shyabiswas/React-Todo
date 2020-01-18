// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
  
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  
  return (
  <div className="todo-list">
    {props.todos.map(item => (
      <li>
        <Todo 
          key={item.id} 
          item={item} 
          toggleCompleted={props.toggleCompleted} 
        />
      </li>
    ))}
  </div>
  );
};

export default TodoList;