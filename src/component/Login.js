import React, {useState, useEffect} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Ragistration from "../image/unnamed.png";
import { config } from '../config/config';
import axios from 'axios';



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const history = useHistory();

    useEffect(() => {
        if(isLogin) {
            history.replace('About')
        }
    }, [isLogin]);

    const loginUser = async (e) => {
        e.preventDefault();
        const body = {
             email, password
        };
        try {
            const url = config.apiUrl + config.login.sUser;
            const res = await axios.post(url, body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (res.status === 201 && res.data) setIsLogin(true);

        } catch (err) {
            console.log(err)
        }

    }
    return (
        <>
            <section className="signin">
                <div className="container mt-5">
                    <div className="signin-contant">
                        <h1 className="form-title">Log In</h1>
                        <div className="signin-form">
                            <div className="signin-image ">

                                <figure>
                                    <img  src={Ragistration} alt="resistration image" />
                                </figure>
                            </div>

                            <form className="resister-form" onSubmit={loginUser} id="resister form">

                               

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email material-icons-name zmdi-hc-2x"></i>
                                    </label>
                                    <input className="input" type="email" name="email" id="email" 
                                    onInput={(e) => setEmail(e.target.value)} autoCapitalize="off" placeholder="Your Email" />
                                </div>  

                                <div className="form-group">
                                    <label htmlFor="passsword">
                                        <i className="zmdi zmdi-lock material-icons-name zmdi-hc-2x"></i>
                                    </label>
                                    <input className="input" type="password" name="passsword" id="passsword" 
                                    onInput={(e) => setPassword(e.target.value)} autoCapitalize="off" placeholder="your Password" />
                                </div>

                                

                                <div className="form-group button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Login" />

                                </div>
                                <NavLink to="/Signup" className="logim-image-link" > Create an account</NavLink>

                            </form>


                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}


export default Login;