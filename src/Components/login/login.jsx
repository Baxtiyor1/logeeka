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

        axios.post('https://logeekascience.com/api/auth/login', {
            'user_name': username.value.trim(),
            'password': password.value.trim()
        })
            .then(function (response) {
                setToken(response.data.data[0].token)
                setResult(response.data.message);
            })
            .catch(function (error) {
                bad.current && bad.current.classList.add('login__bad-active')
            });
    }
    //login farruhbek
    //parol far45
    if(result == 'Login successful!' && token){
        setTimeout(navigate('/admin'), 3000)
    }else{
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