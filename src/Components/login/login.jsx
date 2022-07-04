import axios from 'axios';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import useToken from '../../Hook/useToken';

//Sass
import './login.scss'

function Login() {
    document.title = 'Login'
    let navigate = useNavigate()

    let [token, setToken] = useToken()
    let [result, setResult] = useState('')
    let bad = useRef()

    function loginFunction(e) {
        e.preventDefault()
        let { username, password } = e.target.elements

        if (username.value.trim() && password.value.trim().length > 4) {
            var formData = new FormData();

            formData.append("user_name", username.value.trim());
            formData.append("password", password.value.trim());
            
            axios.post('http://logeekascience.com/api/auth/login', formData, {
                headers: {
                    "type": "formData",
                    "Content-Type": "form-data",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            })
                .then(response => {
                    setToken(response.data.data[0].token)
                    setResult(response.data.message);
                    console.log(response);
                })
                .catch(error => {
                    bad.current && bad.current.classList.add('login__bad-active')
                    console.log(error.message);
                });
        } else {
            if (!username.value.trim()) alert("Enter username")
            if (!password.value.trim().length <= 4 && password.value.trim()) alert("Password must be more than 4 charakter")
        }

    }
    
    if (result === 'Login successful!' && token) {
        setTimeout(navigate('/admin'), 3000)
    } else {
    }

    return (
        <section className='login'>
            <div className="container">
                <div className="login__wrapper">
                    <h1 className='login__title'>Log in</h1>
                    <form className='login__form' onSubmit={loginFunction}>
                        <input className='login__input' name='username' type="text" placeholder='Enter your username' />
                        <input className='login__input' name='password' type="password" placeholder='Enter your password' />
                        <h3 ref={bad} className='login__bad'>User not found</h3>
                        <button className='login__btn' type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Login