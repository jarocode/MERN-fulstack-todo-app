import React, {useState, createContext} from 'react';

export const MovieContext = createContext();


 export const MovieProvider = (props) => {
    const[movie, setMovie] = useState([
        {
          name: 'Avengers',
          price: '$15',
          id: '1',
          category: 'scifi'      
        },
        {
          name: 'Moana',
          price: '$12',
          id: '2',
          category: 'animation'      
        },
        {
          name: 'Inception',
          price: '$14',
          id: '3',
          category: 'fantasy/fiction'      
        },
        {
          name: 'MIB III',
          price: '$15',
          id: '4',
          category: 'scifi'      
        },
        {
          name: 'Kidnapped',
          price: '$15',
          id: '5',
          category: 'Thriller'      
        },
    ])
    
    return(
        <MovieContext.Provider value={[movie, setMovie]}>
            {props.children}
        </MovieContext.Provider>
     );
 }
