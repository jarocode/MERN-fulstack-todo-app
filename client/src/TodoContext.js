import React, {useState, createContext, useEffect} from 'react';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const [todos, setTodos] = useState([
        
    ]) 

    useEffect (() => {
        const getApi = async () => {
            const todos = await fetch('/getTodo');
            const Res = await todos.json();
            return Res;
        }
        getApi().then(res => {
            const {data} = res;
            setTodos(data);
            console.log(data);
        })

    },[]);
    
    const [inputText, setInputText] = useState('');

    
    return ( 
        <TodoContext.Provider value={{
            todos: [todos, setTodos], 
            inputText: [inputText, setInputText] }}>
            {props.children}
        </TodoContext.Provider>
     );
}
 


