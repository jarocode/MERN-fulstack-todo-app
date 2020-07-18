import React from 'react';
import './App.css';
import Todoheader from './components/TodoHeader';
import Todostate from './components/TodoState';
import {TodoProvider} from './TodoContext';




const App = () => {
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
