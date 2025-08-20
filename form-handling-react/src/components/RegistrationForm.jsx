import React, { useState } from 'react';

const RegistrationForm = () => {
  // State for form fields using controlled components - individual state variables
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes for username
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    // Clear username error when user starts typing
    if (errors.username) {
      setErrors(prevErrors => ({
        ...prevErrors,
        username: ''
      }));
    }
  };

  // Handle input changes for email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Clear email error when user starts typing
    if (errors.email) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: ''
      }));
    }
  };

  // Handle input changes for password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Clear password error when user starts typing
    if (errors.password) {
      setErrors(prevErrors => ({
        ...prevErrors,
        password: ''
      }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Check if username is empty
    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }

    // Check if email is empty and valid
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Check if password is empty
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    // Mock API call - simulate user registration
    const formData = { username, email, password };
    console.log('Form submitted with controlled components:', formData);
    alert('Registration successful! (Mock API call)');
    
    // Reset form after successful submission
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>User Registration (Controlled Components)</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            style={{
              width: '100%',
              padding: '8px',
              border: `1px solid ${errors.username ? 'red' : '#ccc'}`,
              borderRadius: '4px'
            }}
          />
          {errors.username && (
            <span style={{ color: 'red', fontSize: '12px' }}>{errors.username}</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            style={{
              width: '100%',
              padding: '8px',
              border: `1px solid ${errors.email ? 'red' : '#ccc'}`,
              borderRadius: '4px'
            }}
          />
          {errors.email && (
            <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            style={{
              width: '100%',
              padding: '8px',
              border: `1px solid ${errors.password ? 'red' : '#ccc'}`,
              borderRadius: '4px'
            }}
          />
          {errors.password && (
            <span style={{ color: 'red', fontSize: '12px' }}>{errors.password}</span>
          )}
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
