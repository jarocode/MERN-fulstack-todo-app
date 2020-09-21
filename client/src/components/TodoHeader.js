import React, {useState, useContext} from 'react';
import styled from '@emotion/styled';
import {TodoContext} from '../TodoContext';
import TodoHead from './Header';

const Todoheader = () => {
    
    const {todos, inputText} = useContext(TodoContext);
    const [todosValue, setTodosValue] = todos;
    const [inputTextValue, setInputTextValue] = inputText;

    const handleSubmit = async (e) => {
        e.preventDefault();
         await fetch('/addTodo', {
            method: 'POST',
            body: JSON.stringify({todo :inputTextValue}),
            headers: {
                "Content-type" : "application/json"
            }
        })
        // const addedTodo = await add.json();
        
        setTodosValue(prevTodo => 
            [...prevTodo, {todo: inputTextValue}])
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
