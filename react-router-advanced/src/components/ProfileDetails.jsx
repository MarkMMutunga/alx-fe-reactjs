import React, { useState } from 'react';

const ProfileDetails = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Full-stack developer passionate about React and modern web technologies.',
    location: 'San Francisco, CA',
    website: 'https://johndoe.dev'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile details saved successfully!');
  };

  return (
    <div style={{
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #ddd'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Profile Details</h2>
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          style={{
            padding: '8px 16px',
            backgroundColor: isEditing ? '#28a745' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      <div style={{ display: 'grid', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
            Full Name:
          </label>
          {isEditing ? (
            <input
              type="text"
              value={userInfo.name}
              onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
          ) : (
            <span style={{ color: '#333' }}>{userInfo.name}</span>
          )}
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
            Email:
          </label>
          {isEditing ? (
            <input
              type="email"
              value={userInfo.email}
              onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
          ) : (
            <span style={{ color: '#333' }}>{userInfo.email}</span>
          )}
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
            Phone:
          </label>
          {isEditing ? (
            <input
              type="tel"
              value={userInfo.phone}
              onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
          ) : (
            <span style={{ color: '#333' }}>{userInfo.phone}</span>
          )}
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
            Bio:
          </label>
          {isEditing ? (
            <textarea
              value={userInfo.bio}
              onChange={(e) => setUserInfo({...userInfo, bio: e.target.value})}
              rows="3"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                resize: 'vertical'
              }}
            />
          ) : (
            <span style={{ color: '#333' }}>{userInfo.bio}</span>
          )}
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
            Location:
          </label>
          {isEditing ? (
            <input
              type="text"
              value={userInfo.location}
              onChange={(e) => setUserInfo({...userInfo, location: e.target.value})}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
          ) : (
            <span style={{ color: '#333' }}>{userInfo.location}</span>
          )}
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
            Website:
          </label>
          {isEditing ? (
            <input
              type="url"
              value={userInfo.website}
              onChange={(e) => setUserInfo({...userInfo, website: e.target.value})}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
          ) : (
            <a href={userInfo.website} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
              {userInfo.website}
            </a>
          )}
        </div>
      </div>

      {isEditing && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
            💡 <strong>Tip:</strong> This is a nested route demonstration. Changes are simulated and won't persist after page refresh.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;
