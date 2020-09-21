import React from 'react';
import styled from '@emotion/styled';

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

    const Input = styled.div`
       padding-top: 1rem;
    `

const TodoHead = ({handleChange, handleSubmit, text}) => {
    return ( 
        <Header>
            <Nav>
                <div className='logo' style={{fontWeight:'bold'}}>
                    <p>JAROtodos</p>
                </div>
                <Input>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={text} onChange={handleChange}/>
                        <button>Add</button>
                    </form>
                </Input>
            </Nav>
        </Header>
     );
}
 
export default TodoHead;