import React from "react";
import { useForm } from "react-hook-form";
import {useHistory} from "react-router-dom"
import {axiosWithAuth} from "../utils/axiosWithAuth"
import { useLocalStorage } from '../hooks/useLocalStorage';




export default function Hotfix() {

    let history = useHistory();
    const [userID, setUserID] = useLocalStorage('userId');
    const { register, handleSubmit } = useForm();
    const onSubmit = data => 
    
    axiosWithAuth()
    .post('/api/auth/login', data)
    .then(res => {
        console.log('your user is logged in', res.data.id);
        setUserID(res.data.id);
        localStorage.setItem('token', res.data.token);
        history.push('/profile');
    })
    .catch(err => console.log('your user is not logged in', err));;
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input name="username" ref={register} />
        <input name="password" ref={register} />
        <input type="submit" />
        </form>
    );
}