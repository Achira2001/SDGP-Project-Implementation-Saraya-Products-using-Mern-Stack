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
              <input type="text" value={email} onChange={(e) => handleInputChange(e, setEmail)} required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <input type="password" value={password} onChange={(e) => handleInputChange(e, setPassword)} required />
              <label>Password</label>
            </div>
            <button type="submit" className="submit-btn">Signin</button>
            <h5 className="switch-btn" onClick={() => setIsSignin(false)}>Don't have an account? Register</h5>
          </form>
        ) : (
          <form className="Register-form" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="input-box">
              <input type="text" value={username} onChange={(e) => handleInputChange(e, setUsername)} required />
              <label>Username</label>
            </div>
            <div className="input-box">
              <input type="text" value={email} onChange={(e) => handleInputChange(e, setEmail)} required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <input type="password" value={password} onChange={(e) => handleInputChange(e, setPassword)} required />
              <label>Password</label>
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
