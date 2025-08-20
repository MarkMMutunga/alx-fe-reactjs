import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required')
});

const FormikForm = () => {
  // Initial form values
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Mock API call - simulate user registration
    console.log('Form submitted with Formik:', values);
    
    // Simulate API delay
    setTimeout(() => {
      alert('Registration successful with Formik! (Mock API call)');
      setSubmitting(false);
      resetForm(); // Reset form after successful submission
    }, 1000);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>User Registration (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>
                Username:
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: `1px solid ${errors.username && touched.username ? 'red' : '#ccc'}`,
                  borderRadius: '4px'
                }}
              />
              <ErrorMessage 
                name="username" 
                component="div" 
                style={{ color: 'red', fontSize: '12px', marginTop: '5px' }} 
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
                Email:
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: `1px solid ${errors.email && touched.email ? 'red' : '#ccc'}`,
                  borderRadius: '4px'
                }}
              />
              <ErrorMessage 
                name="email" 
                component="div" 
                style={{ color: 'red', fontSize: '12px', marginTop: '5px' }} 
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
                Password:
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: `1px solid ${errors.password && touched.password ? 'red' : '#ccc'}`,
                  borderRadius: '4px'
                }}
              />
              <ErrorMessage 
                name="password" 
                component="div" 
                style={{ color: 'red', fontSize: '12px', marginTop: '5px' }} 
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: isSubmitting ? '#6c757d' : '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
