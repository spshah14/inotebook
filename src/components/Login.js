import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";

const Login = (props) => {

    const [credentials, setCredentials] = useState({ email: '', password: '' })

    let navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }) // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert('Login Successfully', 'success');
            navigate('/')
        } else {
            props.showAlert('Invalid details', 'danger')
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='container my-4'>

            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px", background: "transparent" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>


                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="email" name='email' className="form-control form-control-lg" placeholder='Enter Email address' onChange={onChange} />

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="password" name='password' className="form-control form-control-lg" placeholder='Enter Password' onChange={onChange} />

                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center">

                                            </div>



                                            <div className="text-center text-lg-start mt-4 pt-2">

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">Login</button>
                                                </div>
                                                <p className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">Don't have an account?
                                                    <Link to="/signup"
                                                        className="link-primary mx-1">Register</Link></p>
                                            </div>

                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login    