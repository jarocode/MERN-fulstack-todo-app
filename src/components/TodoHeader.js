import React, {useState, useContext} from 'react';
import styled from '@emotion/styled';
import {TodoContext} from '../TodoContext';
import TodoHead from './Header';

const Todoheader = () => {
    
    const {todos, inputText} = useContext(TodoContext);
    const [todosValue, setTodosValue] = todos;
    const [inputTextValue, setInputTextValue] = inputText;

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodosValue(prevTodo => 
            [...prevTodo, {todo: inputTextValue, id: todosValue.length}])
            console.log(todosValue);
        setInputTextValue('');
    }
    
    const handleChange = e => {
        setInputTextValue(e.target.value);
    }
    
    
    return ( 
        <TodoHead 
            handleSubmit={handleSubmit} 
            handleChange={handleChange}
            text={inputTextValue}
        />
     );
}
 
export default Todoheader;
