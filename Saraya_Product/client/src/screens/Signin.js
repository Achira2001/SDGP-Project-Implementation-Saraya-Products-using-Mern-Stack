import React from 'react';

const Signin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="main">
      <div className="navbar">
        <div className="icon"></div>
      </div>

      <div className="Form-box">
        <form className="Login-form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" required />
            <label>Email</label>
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
            <ion-icon name="lock-closed-outline"></ion-icon>
          </div>
          <div className="checkbox">
            <span>
              <input type="checkbox" id="login-checkbox" />
              <label htmlFor="login-checkbox">Remember Me</label>
            </span>
            <h5>Forget password ?</h5>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
          <h5 className="Register-btn">Don't have an account? Register</h5>
        </form>
        <form className="Register-form" onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="input-box">
            <input type="text" required />
            <label>Username</label>
            <ion-icon name="person-outline"></ion-icon>
          </div>
          <div className="input-box">
            <input type="text" required />
            <label>Email</label>
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
            <ion-icon name="lock-closed-outline"></ion-icon>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="register-checkbox" />
            <label htmlFor="register-checkbox">I agree to the terms & conditions</label>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
          <h5 className="Login-btn">Already registered? Login</h5>
        </form>
      </div>
    </div>
  );
};

export default Signin;
