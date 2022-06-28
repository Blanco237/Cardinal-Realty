import React, { useContext,useState } from 'react';

import logo from '../assets/images/logo-metal.png'
import classes from '../assets/styles/views/login.module.css'
import { UserContext } from '../UserContext';

import ToggleSwitch from '../partials/ToggleSwitch';

import axios from 'axios';
import ErrorModal from '../partials/ErrorModal';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState(null);
    const { updateUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser();
        updateUser();
    }

    const loginUser = async () => {
        const data = { email, password }
        const result = await axios.post('http://localhost:5000/users/login', data);
        if(result.data.error){
            let errorComponent = <ErrorModal error={result.data.error} closeModal={()=>setError(null)}/>
            setError(errorComponent);
            return;
        }
        alert('Log In successful '+result.data.name);
        updateStorage(result.data);
    }

    const updateStorage = (data) => {
        if(isChecked){
            localStorage.setItem('user', JSON.stringify(data));
        }
        else{
            sessionStorage.setItem('user', JSON.stringify(data));
        }
    }

  return (
    <div className={`${classes.bgSvg} w-screen h-screen flex flex-col bg-pink-blush justify-center items-center`}>
        <div className="flex flex-col items-center gap-4 justify-center w-[30%] min-h-[22rem] bg-dark-blue shadow-lg rounded-md py-3">
            <div className={`w-[50%]`}>
                <img className={`w-full`} src={logo} alt="logo"/>
            </div>
            <div className={`px-12 w-full grid place-items-center`}>
                <form className={`flex flex-col items-center justify-center w-[80%] text-white`} onSubmit={handleSubmit}>
                    <h3 className='mb-5 text-xl text-center'>Login</h3>
                    <input type="email" className={`${classes.input}  w-full mb-5 h-8 rounded-sm px-3 text-dark-blue`} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="password" className={`${classes.input} w-full mb-5 h-8 rounded-sm px-3 text-dark-blue`} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <div className='w-full flex justify-start mb-2 gap-2'>
                        <ToggleSwitch isChecked={isChecked} setIsChecked={setIsChecked} />
                        <span>Keep Me Logged In</span>
                    </div>
                    <div className='w-full flex justify-start'>
                    <button className={`${classes.button} px-6 py-2 bg-metal hover:bg-grey-blue transition-colors rounded-md shadow-lg cursor-pointer`}>Login</button>
                    </div> 
                </form>
            </div>
        </div>
        {error}
    </div>
  )
}

export default Login