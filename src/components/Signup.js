import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Signup = (props) => {

    const [credentials, setCredentials] = useState({ name: '', email: '', password: '', cpassword: '' })

    let navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = credentials
        if (password === cpassword) {
            const response = await fetch(`http://localhost:5000/api/auth/createUser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }) // body data type must match "Content-Type" header
            });
            const json = await response.json();
            console.log(json);
            if (json.success) {
                // save the auth token and redirect
                localStorage.setItem('token', json.authtoken);
                props.showAlert('Create account Successfully', 'success');
                navigate('/')
            } else {
                props.showAlert('Invalid credentials', 'danger');
            }
        } else {
            props.showAlert('Password and confirm password must be same', 'danger');
        }

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='container my-5'>

            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="name" name='name' className="form-control" placeholder='Your Name' onChange={onChange} />

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="email" name='email' className="form-control" placeholder='Your Email' onChange={onChange} />

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="password" name='password' className="form-control" placeholder='Password' onChange={onChange} minLength={5} required />

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="cpassword" name='cpassword' className="form-control" placeholder='Confirm password' onChange={onChange} minLength={5} required />

                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg">Signup</button>
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

export default Signup