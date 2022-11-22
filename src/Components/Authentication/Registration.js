import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userRegistration } from '../../Store/Action/authAction';

const Registration = () => {

        const dispatch = useDispatch();

        const [loadImage, setLoadImage] = useState('');
        const [state, setState] = useState({
                userName: '',
                email: '',
                password: '',
                confirmPass: '',
                image: ''
        });

        const inputHandle = (e) => {
                setState({
                        ...state,
                        [e.target.name]: e.target.value
                })
        }
        const fileHandle = e => {
                if (e.target.files.length !== 0) {
                        setState({
                                ...state,
                                [e.target.name]: e.target.value
                        })
                }

                const reader = new FileReader();
                reader.onload = () => {
                        setLoadImage(reader.result);
                }
                reader.readAsDataURL(e.target.files[0]);
        }

        const registration = e => {
                const { userName, email, password, image, confirmPass } = state;
                e.preventDefault();

                const formData = new FormData()

                formData.append('userName', userName);
                formData.append('email', email);
                formData.append('password', password);
                formData.append('confirmPass', confirmPass);
                formData.append('image', image);

                dispatch(userRegistration(formData))

        }
        return (
                <div className="register">
                        <div className="card">
                                <div className="card-header">
                                        <h3>Please Registration!</h3>
                                </div>
                                <div className="card-body">
                                        <form onSubmit={registration}>
                                                <div className="form-group">
                                                        <label htmlFor="username">User Name</label>
                                                        <input onChange={inputHandle} name="userName" type="text" className="form-control" placeholder="Enter Username" id="username" value={state.userName} />
                                                </div>
                                                <div className="form-group">
                                                        <label htmlFor="email">Enter Email</label>
                                                        <input onChange={inputHandle} name="email" type="email" className="form-control" placeholder="Enter Email" id="email" value={state.email} />
                                                </div>
                                                <div className="form-group">
                                                        <label htmlFor="password">Password</label>
                                                        <input onChange={inputHandle} name="password" type="password" className="form-control" placeholder="Enter Password" id="password" value={state.password} />
                                                </div>
                                                <div className="form-group">
                                                        <label htmlFor="confirm-pass">Confirm Password</label>
                                                        <input onChange={inputHandle} name="confirmPass" type="password" className="form-control" placeholder="Confirm Password" id="confirm-pass" value={state.confirmPass} />
                                                </div>
                                                <div className="form-group">
                                                        <div className="file-image">
                                                                <div className="image">
                                                                        {loadImage ? <img src={loadImage} /> : ''}
                                                                </div>
                                                                <div className="file">
                                                                        <label htmlFor="image">Upload Image</label>
                                                                        <input onChange={fileHandle} name="image" type="file" className="form-control" id="image" value={state.image} />
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="form-group">
                                                        <input type="submit" value='register' className="btn" />
                                                </div>
                                                <div className="form-group">
                                                        <span>
                                                                <Link to='/messenger/login' style={{
                                                                        color: 'white',
                                                                }}>Login Your Account</Link>
                                                        </span>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </div>
        );
};

export default Registration;