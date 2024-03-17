import React, { useState } from 'react';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e, setter) => setter(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Signing in:', email, password);
    // Here, you would typically send a request to your backend server
  };

  return (
    <div className="main">
      <div className="Form-box">
        <form onSubmit={handleSubmit}>
          <h1>Signin</h1>
          <div className="input-box">
            <input type="email" className="form-control" value={email} onChange={(e) => handleInputChange(e, setEmail)} placeholder="Email" />
          </div>
          <div className="input-box">
            <input type="password" className="form-control" value={password} onChange={(e) => handleInputChange(e, setPassword)} placeholder="Password" />
          </div>
          <button type="submit" className="submit-btn">Signin</button>
          <h5 className="switch-btn"><a href="/signup">Don't have an account? Register</a></h5>
        </form>
      </div>
    </div>
  );
};

export default Signin;
