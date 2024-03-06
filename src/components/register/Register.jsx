
import { NavLink } from 'react-router-dom'
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import app from '../Auth/FirebaseApp';
import { RegisterwithPassword } from '../context/AuthContext';
import { useState } from 'react';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const auth = getAuth(app);
    
    const handleRegister = (e) => {
        e.preventDefault();
        RegisterwithPassword(email , password);
        // console.log(name, email, password);
        // createUserWithEmailAndPassword(auth, email , password)
        //     .then(result =>{
        //         console.log(result.user);
        //     })
        //     .catch(error =>{
        //         console.log(error);
        //     })


    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col items-center">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" id='name' placeholder=" Name" className="input input-bordered" onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" id='email' placeholder="Email" className="input input-bordered" onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" id='password' placeholder="Password" className="input input-bordered" onChange={(e) => setPassword(e.target.value)} required />
                                <label className="label">
                                    <span>Already have an account </span>
                                    <NavLink to={'/signin'} className="label-text-alt link link-hover text-green-400"> ? SignIn Here</NavLink>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" onClick={handleRegister}>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register
