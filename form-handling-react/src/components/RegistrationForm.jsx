import React, { useState } from 'react';

const RegistrationForm = () => {
  // State for form fields using controlled components
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Check if username is empty
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    // Check if email is empty and valid
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Check if password is empty
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
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
    console.log('Form submitted with controlled components:', formData);
    alert('Registration successful! (Mock API call)');
    
    // Reset form after successful submission
    setFormData({
      username: '',
      email: '',
      password: ''
    });
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
            value={formData.username}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
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
