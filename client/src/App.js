import React, {useEffect} from 'react';
import './App.css';
import Todoheader from './components/TodoHeader';
import Todostate from './components/TodoState';
import {TodoProvider} from './TodoContext';
import {loadUser  } from "./actions/authActions";




const App = () => {
  
  use
  
  return ( 
    <TodoProvider>
      <div>
        <Todoheader/>
        <Todostate/>
      </div>
    </TodoProvider>
    
  );
}
 
export default App;
