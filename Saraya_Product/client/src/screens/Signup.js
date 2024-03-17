import React, { useState } from 'react';

const Signup = () => {
  // State to toggle between login and register forms
  const [isSignin, setIsSignin] = useState(false);

  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [selectedOption, setSelectedOption] = useState('Mr.'); // Added state for selected option

  // Handle input change
  const handleInputChange = (e, setter) => setter(e.target.value);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignin) {
      console.log('Signing in:', email, password);
    } else {
      console.log('Registering:', username, email, password, selectedOption);
    }
    // Here, you would typically send a request to your backend server
  };

  return (
    <div className="main">
      <div className="Form-box">
        <form className={`Register-form ${isSignin ? "change-form" : ""}`} onSubmit={handleSubmit}>
          {isSignin ? (
            <h1>Signin</h1>
          ) : (
            <h1>Register</h1>
          )}
          {!isSignin && (
            <div className="input-box">
              <input type="text" value={username} onChange={(e) => handleInputChange(e, setUsername)} required />
              <label>Username</label>
            </div>
          )}
          <div className="input-box">
            <input type="text" value={email} onChange={(e) => handleInputChange(e, setEmail)} required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" value={password} onChange={(e) => handleInputChange(e, setPassword)} required />
            <label>Password</label>
          </div>
          {!isSignin && (
            <div className="input-box">
              <select className="form-control" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} required>
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Mrs.">Mrs.</option>
              </select>
              <label>State</label>
            </div>
          )}
          <button type="submit" className="submit-btn">{isSignin ? "Signin" : "Register"}</button>
          <h5 className="switch-btn" onClick={() => setIsSignin(!isSignin)}>{isSignin ? "Don't have an account? Register" : "Already have an account? Signin"}</h5>
        </form>
      </div>
    </div>
  );
};

export default Signup;
