import React, {useState, useContext} from 'react';
import {MovieContext} from '../MovieContext';

const AddMovie = () => {
    
    const [movie, setMovie] = useContext(MovieContext);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    
    const updateName = e => {
        setName(e.target.value);
    }

    const updatePrice = e => {
        setPrice(e.target.value);
    }
    
    const updateCategory = e => {
        setCategory(e.target.value);
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        setMovie(prevMovie => 
            [...prevMovie, {name:name, price:price, category:category}])
    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' value={name} onChange={updateName} />
            <input type='text' name='price' value={price} onChange={updatePrice}/>
            <input type="text" name='category' value={category} onChange={updateCategory}/>
            <button>Submit</button>
        </form>
     );
}
 
export default AddMovie;