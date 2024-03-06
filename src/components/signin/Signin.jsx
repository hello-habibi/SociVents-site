import React from 'react'
import { signInWithPassword } from '../context/AuthContext';

function Signin() {

    const handleSignIn =(e)=>{
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        signInWithPassword(email , password);
        // e.reset();
        document.getElementById("email").value ="";
        document.getElementById("password").value ="";

    }
    return (
        <>
            <div className='w-1/2 mx-auto bg-slate-600 rounded-xl text-white p-5 flex text-xl'>
                <form id="loginForm" onSubmit={handleSignIn} className='items-center w-3/4 mx-auto'>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label><br />
                        <input type="email" id="email" name="email" required className='rounded-lg mb-2'></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label><br />
                        <input type="password" id="password" name="password" className='rounded-lg mb-2' required></input>
                    </div>
                    <button type="submit" className="btn" >Login</button>
                </form>
            </div>
        </>
    )
}

export default Signin
