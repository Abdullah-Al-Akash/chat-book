import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
        return (
                <div className="register">
                        <div className="card">
                                <div className="card-header">
                                        <h3>Please Login Here!</h3>
                                </div>
                                <div className="card-body">
                                        <form action="">
                                                <div className="form-group">
                                                        <label htmlFor="username">User Name</label>
                                                        <input type="text" className="form-control" placeholder="Enter Username" id="username" />
                                                </div>
                                                <div className="form-group">
                                                        <label htmlFor="email">Enter Email</label>
                                                        <input type="email" className="form-control" placeholder="Enter Email" id="email" />
                                                </div>
                                                <div className="form-group">
                                                        <label htmlFor="password">Password</label>
                                                        <input type="password" className="form-control" placeholder="Enter Password" id="password" />
                                                </div>
                                                <div className="form-group">
                                                        <input type="submit" value='register' className="btn" />
                                                </div>
                                                <div className="form-group">
                                                        <span>
                                                                <Link to='/messenger/registration' style={{
                                                                        color: 'white',
                                                                }}>Registration Here!</Link>
                                                        </span>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </div>
        );
};

export default Login;