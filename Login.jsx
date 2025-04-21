import React, { useState } from 'react';
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './Login.css';

function App() {
  const [isActive, setIsActive] = useState(false);
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [signInData, setSignInData] = useState({
    email: '',
    password: ''
  });

  const toggleForm = () => {
    setIsActive(!isActive);
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbx1Tlq0kt8C4F9oAD5M1kSFTv0PH9hwGOtWY4Ue9N8oks3WtRa7Ne61HcFFeK9X2Cvm/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpData),
      });

      const result = await response.json();
      if (result.status === 'success') {
        alert('Sign-up successful!');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Sign In Data:', signInData);
  };

  return (
    <div className="app-container">
      <div className={`container ${isActive ? 'active' : ''}`} id="container">
        {/* Sign Up Form */}
        <div className="form-container sign-up">
          <form onSubmit={handleSignUpSubmit}>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon"><FaGoogle /></a>
              <a href="#" className="icon"><FaFacebookF /></a>
              <a href="#" className="icon"><FaGithub /></a>
              <a href="http://www.linkedin.com/in/ajimmulani" className="icon"><FaLinkedinIn /></a>
            </div>
            <span>or use your email for registration</span>
            <input 
              type="text" 
              name="name"
              placeholder="Name" 
              value={signUpData.name}
              onChange={handleSignUpChange}
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              value={signUpData.email}
              onChange={handleSignUpChange}
              required
            />
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={signUpData.password}
              onChange={handleSignUpChange}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in">
          <form onSubmit={handleSignInSubmit}>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="https://www.google.com/" className="icon"><FaGoogle /></a>
              <a href="#" className="icon"><FaFacebookF /></a>
              <a href="#" className="icon"><FaGithub /></a>
              <a href="http://www.linkedin.com/in/ajimmulani" className="icon"><FaLinkedinIn /></a>
            </div>
            <span>or use your email password</span>
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              value={signInData.email}
              onChange={handleSignInChange}
              required
            />
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={signInData.password}
              onChange={handleSignInChange}
              required
            />
            <a href="#">Forget Your Password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>

        {/* Toggle Container */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" onClick={toggleForm}>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, AJIM!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button className="hidden" onClick={toggleForm}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;