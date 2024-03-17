import React, { useState } from 'react';

const Signup = () => {
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nic, setNic] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('male');
  const [houseNo, setHouseNo] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [location, setLocation] = useState('');
  const [birthday, setBirthday] = useState('');
  const [positionType, setPositionType] = useState('');
  const [confirmation, setConfirmation] = useState(false);

  const handleInputChange = (e, setter) => setter(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
    console.log('Registering:', {
      title,
      firstName,
      lastName,
      nic,
      phone,
      email,
      password,
      confirmPassword,
      gender,
      houseNo,
      street,
      city,
      location,
      birthday,
      positionType,
      confirmation,
    });
    // Here, you would typically send a request to your backend server
  };

  return (
    <div className="main">
      <div className="Form-box">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="input-box">
            <select className="form-control" value={title} onChange={(e) => handleInputChange(e, setTitle)}>
              <option>Choose...</option>
              <option>Mr.</option>
              <option>Ms.</option>
              <option>Mrs.</option>
            </select>
          </div>
          <div className="input-box">
            <input type="text" className="form-control" value={firstName} onChange={(e) => handleInputChange(e, setFirstName)} placeholder="First Name" />
          </div>
          <div className="input-box">
            <input type="text" className="form-control" value={lastName} onChange={(e) => handleInputChange(e, setLastName)} placeholder="Last Name" />
          </div>
          <div className="input-box">
            <input type="text" className="form-control" value={nic} onChange={(e) => handleInputChange(e, setNic)} placeholder="NIC" />
          </div>
          <div className="input-box">
            <input type="text" className="form-control" value={phone} onChange={(e) => handleInputChange(e, setPhone)} placeholder="Phone Number" />
          </div>
          <div className="input-box">
            <input type="email" className="form-control" value={email} onChange={(e) => handleInputChange(e, setEmail)} placeholder="Email" />
          </div>
          <div className="input-box">
            <input type="password" className="form-control" value={password} onChange={(e) => handleInputChange(e, setPassword)} placeholder="Password" />
          </div>
          <div className="input-box">
            <input type="password" className="form-control" value={confirmPassword} onChange={(e) => handleInputChange(e, setConfirmPassword)} placeholder="Re-enter Password" />
          </div>
          <div className="input-box" style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '20px' }}>Gender:</span>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
              <label className="form-check-label" htmlFor="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="female" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
              <label className="form-check-label" htmlFor="female">Female</label>
            </div>
          </div>
          <div className="input-box">
            <input type="text" className="form-control" value={houseNo} onChange={(e) => handleInputChange(e, setHouseNo)} placeholder="House No." />
          </div>
          <div className="input-box">
            <input type="text" className="form-control" value={street} onChange={(e) => handleInputChange(e, setStreet)} placeholder="Street" />
          </div>
          <div className="input-box">
            <input type="text" className="form-control" value={city} onChange={(e) => handleInputChange(e, setCity)} placeholder="City" />
          </div>
          <div className="input-box">
            <input type="text" className="form-control" value={location} onChange={(e) => handleInputChange(e, setLocation)} placeholder="Location" />
          </div>
          <div className="input-box">
            <input type="date" className="form-control" value={birthday} onChange={(e) => handleInputChange(e, setBirthday)} />
          </div>
          <div className="input-box">
            <select className="form-control" value={positionType} onChange={(e) => handleInputChange(e, setPositionType)}>
              <option>Choose...</option>
              <option>Rider</option>
              <option>Lorry</option>
              <option>Stores</option>
              <option>Admin</option>
            </select>
          </div>
          <div className="input-box">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="confirmation" checked={confirmation} onChange={(e) => setConfirmation(e.target.checked)} />
              <label className="form-check-label" htmlFor="confirmation">I confirm that this information is true</label>
            </div>
          </div>
          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
