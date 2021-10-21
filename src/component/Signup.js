import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Ragistration from "../image/coding-vector-illustration-260nw-687456625.jpg"
import { config } from '../config/config';
import axios from 'axios';


const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [profession, setProfession] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedUp, setIsSignedUp] = useState(false);

    const history = useHistory();

    useEffect(() => {
        if(isSignedUp) {
            history.replace('Login')
        }
    }, [isSignedUp]);

    const signupUser = async (e) => {
        e.preventDefault();
        const body = {
            name, email, phone, profession, password
        };
        try {
            const url = config.apiUrl + config.signup.addUser;
            const res = await axios.post(url, body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (res.status === 201 && res.data) setIsSignedUp(true);

        } catch (err) {
            console.log(err)
        }

    }

    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-contant">
                        <h1 className="form-title">Sign Up</h1>
                        <div className="signup-form">

                            <form className="resister-form" onSubmit={signupUser} id="resister form">

                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account-o material-icons-name zmdi-hc-2x"></i>
                                    </label>
                                    <input className="input" onInput={(e) => setName(e.target.value)} type="text" name="name" id="name" autoCapitalize="off" placeholder="Your Name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email material-icons-name zmdi-hc-2x"></i>
                                    </label>
                                    <input className="input" onInput={(e) => setEmail(e.target.value)} type="email" name="email" id="email" autoCapitalize="off" placeholder="Your Email" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i className="zmdi zmdi-phone-in-talk material-icons-name zmdi-hc-2x"></i>
                                    </label>
                                    <input className="input" type="number" onInput={(e) => setPhone(e.target.value)} name="phone" id="phone" autoCapitalize="off" placeholder="your Phone Number" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="work">
                                        <i className="zmdi zmdi-slideshow material-icons-name zmdi-hc-2x"></i>
                                    </label>
                                    <input className="input" type="text" onInput={(e) => setProfession(e.target.value)} name="work" id="work" autoCapitalize="off" placeholder="your Profession" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="passsword">
                                        <i className="zmdi zmdi-lock material-icons-name zmdi-hc-2x"></i>
                                    </label>
                                    <input className="input" type="password" onInput={(e) => setPassword(e.target.value)} name="passsword" id="passsword" autoCapitalize="off" placeholder="your Password" />
                                </div>

                              

                                <div className="form-group button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Resister" />

                                </div>

                            </form>

                            <div className="signup-image">

                                <figure>
                                    <img src={Ragistration} alt="resistration image" />
                                </figure>
                                <NavLink to="/Login" className="logim-image-link" >I am alrady resister</NavLink>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}


export default Signup;