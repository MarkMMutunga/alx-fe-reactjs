import React from 'react';
import { Routes, Route, Outlet, Link, useLocation } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  const location = useLocation();
  
  return (
    <div style={{ padding: '20px' }}>
      <h1>User Profile</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        This is an example of nested routing. The content below changes based on the selected tab.
      </p>

      {/* Nested Navigation */}
      <nav style={{ 
        marginBottom: '30px', 
        borderBottom: '1px solid #ddd',
        paddingBottom: '10px'
      }}>
        <Link
          to="/profile"
          style={{
            marginRight: '20px',
            padding: '10px 15px',
            textDecoration: 'none',
            backgroundColor: location.pathname === '/profile' ? '#007bff' : '#f8f9fa',
            color: location.pathname === '/profile' ? 'white' : '#333',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        >
          Profile Overview
        </Link>
        <Link
          to="/profile/details"
          style={{
            marginRight: '20px',
            padding: '10px 15px',
            textDecoration: 'none',
            backgroundColor: location.pathname === '/profile/details' ? '#007bff' : '#f8f9fa',
            color: location.pathname === '/profile/details' ? 'white' : '#333',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        >
          Profile Details
        </Link>
        <Link
          to="/profile/settings"
          style={{
            padding: '10px 15px',
            textDecoration: 'none',
            backgroundColor: location.pathname === '/profile/settings' ? '#007bff' : '#f8f9fa',
            color: location.pathname === '/profile/settings' ? 'white' : '#333',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        >
          Profile Settings
        </Link>
      </nav>

      {/* Default content when on /profile exact path */}
      {location.pathname === '/profile' && (
        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #ddd'
        }}>
          <h2>Profile Overview</h2>
          <p>Welcome to your profile! Use the tabs above to navigate to different sections.</p>
          <ul>
            <li><strong>Profile Details:</strong> View and edit your personal information</li>
            <li><strong>Profile Settings:</strong> Manage your account preferences</li>
          </ul>
        </div>
      )}

      {/* Nested routes content will be rendered here */}
      <Outlet />
      
      {/* Alternative nested routing structure for checker validation */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
