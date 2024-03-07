import React from 'react';
import { Link } from 'react-router-dom';

function Signin() {
    return (
        <div className="Form-box">
            <form className="Login-form">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" required/>
                    <label>Email</label>
                    <ion-icon name="mail-outline"></ion-icon>
                </div>
                <div className="input-box">
                    <input type="password" required/>
                    <label>Password</label>
                    <ion-icon name="lock-closed-outline"></ion-icon>
                </div>
                <div className="checkbox">
                    <span>
                        <input type="checkbox" id="login-checkbox"/>
                        <label htmlFor="login-checkbox">Remember Me</label>
                    </span>
                    <h5>Forget password ?</h5>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
                <Link to="/signup" className="Register-btn">Don't have an account? Register</Link>
            </form>
            <form className="Register-form">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" required/>
                    <label>Username</label>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
                <div className="input-box">
                    <input type="text" required/>
                    <label>Email</label>
                    <ion-icon name="mail-outline"></ion-icon>
                </div>
                <div className="input-box">
                    <input type="password" required/>
                    <label>Password</label>
                    <ion-icon name="lock-closed-outline"></ion-icon>
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="register-checkbox"/>
                    <label htmlFor="register-checkbox">I agree to the terms & conditions</label>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
                <Link to="/signin" className="Login-btn">Already registered? Login</Link>
            </form>
        </div>
    );
}

export default Signin;
