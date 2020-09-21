import React, {useState} from 'react';
import styled from '@emotion/styled';


const Container = styled.div`
        margin: 4.5rem 20rem 3rem 25rem;
        /* position: absolute;
        top: 5rem;
        left: 25rem; */
    `
    const H2 = styled.h2`
        margin-bottom: 2.5rem;
        color: #23355f;
    `
    
    const Input = styled.input`
        border: none;
        border-bottom: 1px solid #aaa;
        margin-bottom: 1rem;
        width: 100%;
        &:focus {
            outline: none;
        } 
    `
    const Button = styled.button`
         width: 108%;
         margin-top: 1.5rem;
         height: 2.6rem;
         border: 1px solid #2146f7;
         border-radius: 1.7rem;
         color: #fff;
         background: linear-gradient(to right, #2146f7, #f23689);
         font-weight: bold;
    `
    const P1 = styled.p`
        color: #aaa;
    `
    const Span =  styled.span`
        font-size: 0.8em;
        color: #f00;
        font-style: italic;
    `

const Signup = () => {
    const [state, setState] = useState({
        email : "",
        password: ""
    })
    
    return ( 
        <Container>
            <H2>Sign up</H2>
            <form onSubmit={handleSubmit}>
                <label>
                    <P1>First name</P1>
                    <Input 
                       type='text' 
                       value={first}
                       name='first' 
                       onChange={handleChange}
                       /><Span>{errors.first}</Span>
                </label>
                <label>
                    <P1>Last name</P1>
                    <Input 
                        type='text' 
                        name='last' 
                        value={last}
                        onChange={handleChange}
                    />
                    <Span>{errors.last}</Span>
                </label>
                <label>
                    <P1>Username</P1>
                    <Input 
                        type='text' 
                        name='username' 
                        value={username}
                        onChange={handleChange}
                        />
                        <Span>{errors.username}</Span>
                </label>
                <label>
                    <P1>Password</P1>
                    <Input 
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                     />
                     <Span>{errors.password}</Span>
                </label>
                <label>
                    <P1>Confirm password</P1>
                    <Input 
                    type='password'
                    name='confirm'
                    value={confirm}
                    onChange={handleChange}
                    />
                    
                </label>
                <Button>Lets get started!</Button>
                </form>
        </Container>

     );
}
 
export default Signup;