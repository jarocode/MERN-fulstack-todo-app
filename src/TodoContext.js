import React, {useState, createContext} from 'react';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const [todos, setTodos] = useState([
        
    ]) 

    const [inputText, setInputText] = useState('');

    
    return ( 
        <TodoContext.Provider value={{
            todos: [todos, setTodos], 
            inputText: [inputText, setInputText] }}>
            {props.children}
        </TodoContext.Provider>
     );
}
 


