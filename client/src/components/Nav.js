import React, {useState, useContext} from 'react';
import styled from '@emotion/styled';
import Movie from './Movie';
import {MovieContext} from '../MovieContext';


const Nav = () => {
    const [movie, setMovie] = useContext(MovieContext);
    const Header = styled.header`
       margin: 0;
       padding: 0;
       background: #000;
    `

    const Nav = styled.nav`
        display: flex;
        justify-content: space-around;
        color: #fff;
    `
    
    
    
    
    return ( 
        <Header>
            <Nav>
                <div className='logo' style={{fontWeight:'bold'}}>
                    <p>JAROmovies</p>
                </div>
                <div>
                    <p>number of movies: {movie.length}</p>
                </div>
            </Nav>
        </Header>
     );
}
 
export default Nav;








