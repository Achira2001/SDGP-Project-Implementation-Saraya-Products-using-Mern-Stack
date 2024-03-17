import React, { useState } from 'react';

const Signin = () => {
  // State to toggle between login and register forms
  const [isSignin, setIsSignin] = useState(true);

  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // Only for registration

  // Handle input change
  const handleInputChange = (e, setter) => setter(e.target.value);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignin) {
      // Handle login logic
      console.log('Signing in:', email, password);
    } else {
      // Handle registration logic
      console.log('Registering:', username, email, password);
    }
    // Here, you would typically send a request to your backend server
  };

  return (
    <div className="main">
      <div className="Form-box">
        {isSignin ? (
          <form className="Login-form" onSubmit={handleSubmit}>
            <h1>Signin</h1>
            <div className="input-box">
              <label htmlFor="signin-email">Email</label>
              <input type="email" id="signin-email" value={email} onChange={(e) => handleInputChange(e, setEmail)} required />
            </div>
            <div className="input-box">
              <label htmlFor="signin-password">Password</label>
              <input type="password" id="signin-password" value={password} onChange={(e) => handleInputChange(e, setPassword)} required />
            </div>
            <button type="submit" className="submit-btn">Signin</button>
            <h5 className="switch-btn" onClick={() => setIsSignin(false)}>Don't have an account? Register</h5>
          </form>
        ) : (
          <form className="Register-form" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="input-box">
              <label htmlFor="register-username">Username</label>
              <input type="text" id="register-username" value={username} onChange={(e) => handleInputChange(e, setUsername)} required />
            </div>
            <div className="input-box">
              <label htmlFor="register-email">Email</label>
              <input type="email" id="register-email" value={email} onChange={(e) => handleInputChange(e, setEmail)} required />
            </div>
            <div className="input-box">
              <label htmlFor="register-password">Password</label>
              <input type="password" id="register-password" value={password} onChange={(e) => handleInputChange(e, setPassword)} required />
            </div>
            <button type="submit" className="submit-btn">Register</button>
            <h5 className="switch-btn" onClick={() => setIsSignin(true)}>Already have an account? Signin</h5>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signin;
