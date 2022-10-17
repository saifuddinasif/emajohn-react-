import React,{useContext} from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';


const Login = () => {

    const navigate = useNavigate();
   
     const location =useLocation()
     const from = location.state?.from?.pathname || '/'

const { SignIn} = useContext(AuthContext);
   const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email= form.email.value;
    const password =form.password.value;


    SignIn(email,password)
    .then(result => {
        const user = result.user;
        form.reset();

        navigate(from, {replace:true})
        
        console.log(user);  
    })
   .catch(error =>console.error(error));




   }


    return (
        <div className='form-container'>

            <h2 className='form-title'> Login</h2>

            <form  onSubmit={handleSubmit}>
           <div className='form-control'>

            <label htmlFor='email'> Email</label>

             <input type="email" name="email"  required />
           </div>

           <div className='form-control'>

            <label htmlFor='password'> Password</label>

            <input type="password" name="password"  required />



</div>
 
  <button className='btn-submit'> Submit </button>
               
            </form>
        
    <p>New to Ema John <Link to={'/signup'}>create a New Account </Link></p>
        
        </div>
    );
};

export default Login;