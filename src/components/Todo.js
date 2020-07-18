import React, {useState} from 'react';
import styled from '@emotion/styled';


const Todo = ({todo, handleComplete, index, completed, handleRemove}) => {
    
    let R = '';
    let B = '';
    let hex = null;
    if(completed) {
       R = '0'
       B = '0'
       hex = `#${R}f${B}`; 
    }
    else {
       R = 'f';
       B = 'f';
       hex = `${R}f${B}`; 
    }
    
    const Todo = styled.div`
       margin-top: 2rem;
       margin: auto;
    `
    const Text = styled.div`
       border: 1px solid #000;
       margin: 0.5rem 7rem 0.5rem 7rem;
       display: flex;
       justify-content: space-between;
       background: ${hex}; 
    `
    
    //return area
    return ( 
        <Todo>
            <Text>
               <input 
                     type='checkbox' 
                     onChange={() => handleComplete(index)} 
                     checked={completed} 
               />
               <p 
                     style={{
                           paddingLeft: '0 rem', 
                           color: completed ? '#fff' : '#000', 
                           fontWeight: completed? 'bold' : 'normal'
               }}>{todo}</p> 
               
               <button onClick={() => handleRemove(index)}>remove</button>
            </Text>
        </Todo>
     );
}
 
export default Todo;