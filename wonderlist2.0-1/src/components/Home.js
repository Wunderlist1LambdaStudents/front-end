import React from 'react';
import { Button } from '@material-ui/core';
import {useHistory} from 'react-router-dom'


// path = /login and /signup

const Home = () => {

    const {push} = useHistory();

    return (
        <>
            <Button variant='outlined' color='Primary' onClick={()=> push('/login')} >Login</Button>
            <Button variant='outlined' color='secondary' onClick={()=> push('/signup')}>Signup</Button>
        </>
    )

}

export default Home