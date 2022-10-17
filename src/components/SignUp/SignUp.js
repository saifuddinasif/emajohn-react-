import React,{useState, useContext} from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

import './SignUp.css'

const SignUp = () => {

    const {createUser } =useContext(AuthContext)
    const [error,setError] = useState(null)
   const handleSubmit = (e) => {
     


    e.preventDefault();
    const form = e.target;

    const email = form.email.value;

    const password = form.password.value;

    const confirm = form.confirm.value;

    console.log(email, password, confirm)


    if(password.length < 6){
        setError(' PASSWORD  SHOULD BE SIX CHARATER LONG ')
        return;
        
    }

    if(password !== confirm){
        setError('YOUR PASSWORD DID NOT MATCH ')
        return;

    }

    createUser(email,password)
      .then(result => {

        const user = result.user;

        console.log(user);
        form.reset();
        
      })

   }


    return (
        <div className='form-container'>

            <h2 className='form-title'> Sign Up </h2>

            <form onSubmit={handleSubmit}>
           <div className='form-control'>

            <label htmlFor='email'> Email</label>

             <input type="email" name="email" id="" required />
           </div>

           <div className='form-control'>

            <label htmlFor='password'> Password</label>

            <input type="password" name="password" id="" required />

         </div>


                   <div className='form-control'>

                <label htmlFor='confirm'> Confirm</label>

                <input type="confirm" name="confirm" id="" required />

                  </div>
 
  <button className='btn-submit'> Submit </button>
               
            </form>
        
    <p>Already a member<Link to={'/login'}>Login</Link></p>
            <p className='text'>{error}</p>
        
        </div>
    );
};

export default SignUp;