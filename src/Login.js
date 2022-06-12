import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react'
import './Login.css'
import {auth} from './firebase';


function Login() {
   
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //it succesfullycreated a new user with email and password

          //  console.log(auth);

            if(auth) {
                history.push('/')
            }

        })
        .catch(error => alert(error.message))
        //some fancy firebase login shiit

    }

   
    return (
        <div className='login'>
             <Link to='/'>
            <img className='login__logo'
             src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
             </Link>

             <div className='login__container'>
                 <h1>Sign in</h1>

                 <form>fw
                     <h5>E-mail</h5>
                     <input type='text' value={email} onChange=
                     {e => setEmail(e.target.value)} />

                     <h5>Password</h5>
                     <input type='password' value={password} onChange=
                     {e => setPassword(e.target.value)} />

                     <button type='submit' 
                     className='login__signinButton' onClick={signIn}>Sign In</button>

                 </form>

                 <p>
                     By signing-in you agree to the Amazon Fake 
                     clone conditions of use & sale. Please seeour privacy 
                     Notice, our Cookies Notice and our Interest-Based 
                     Ads Notice.
                 </p>

                 <button onClick={register} 
                 className='login__registerButton'>Create Your Amazon Account</button>
             </div>
        </div>
    )
}

export default Login
