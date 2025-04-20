import { useState } from 'react';
import './Login.css';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    userId: '',
    password: ''
  });
  const [isFocused, setIsFocused] = useState({
    userId: false,
    password: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shake, setShake] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (field) => {
    setIsFocused(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const handleBlur = (field) => {
    setIsFocused(prev => ({
      ...prev,
      [field]: false
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!credentials.userId || !credentials.password) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempted with:', credentials);
      setIsSubmitting(false);
      // Add your authentication logic here
    }, 1500);
  };

  return (
    <div className="login-container">
      <div className={`login-box ${shake ? 'shake' : ''}`}>
        <div className="login-header">
          <h2 className="welcome-text">Welcome Back</h2>
          <p className="subtext">Please enter your credentials</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className={`input-group ${isFocused.userId ? 'focused' : ''}`}>
            <label htmlFor="userId">User ID</label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={credentials.userId}
              onChange={handleChange}
              onFocus={() => handleFocus('userId')}
              onBlur={() => handleBlur('userId')}
              autoComplete="username"
            />
            <div className="input-highlight"></div>
          </div>
          
          <div className={`input-group ${isFocused.password ? 'focused' : ''}`}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              onFocus={() => handleFocus('password')}
              onBlur={() => handleBlur('password')}
              autoComplete="current-password"
            />
            <div className="input-highlight"></div>
          </div>
          
          <div className="options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#forgot" className="forgot-password">Forgot password?</a>
          </div>
          
          <button 
            type="submit" 
            className={`login-button ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="spinner"></span>
            ) : (
              'Log In'
            )}
          </button>
        </form>
        
        <div className="signup-link">
          Don't have an account? <a href="#signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;