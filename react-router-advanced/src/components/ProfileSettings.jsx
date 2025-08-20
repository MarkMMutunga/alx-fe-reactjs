import React, { useState } from 'react';

const ProfileSettings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      sms: false
    },
    privacy: {
      profileVisible: true,
      showEmail: false,
      showPhone: false
    },
    preferences: {
      theme: 'light',
      language: 'en',
      timezone: 'UTC-8'
    }
  });

  const handleNotificationChange = (type) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type]
      }
    }));
  };

  const handlePrivacyChange = (type) => {
    setSettings(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [type]: !prev.privacy[type]
      }
    }));
  };

  const handlePreferenceChange = (type, value) => {
    setSettings(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [type]: value
      }
    }));
  };

  const handleSaveSettings = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div style={{
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #ddd'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2>Profile Settings</h2>
        <button
          onClick={handleSaveSettings}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Save All Settings
        </button>
      </div>

      {/* Notification Settings */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ borderBottom: '2px solid #007bff', paddingBottom: '5px' }}>
          🔔 Notification Preferences
        </h3>
        <div style={{ marginTop: '15px' }}>
          {Object.entries(settings.notifications).map(([key, value]) => (
            <label key={key} style={{ display: 'block', marginBottom: '10px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={value}
                onChange={() => handleNotificationChange(key)}
                style={{ marginRight: '10px' }}
              />
              <span style={{ textTransform: 'capitalize' }}>
                {key === 'email' ? 'Email Notifications' : 
                 key === 'push' ? 'Push Notifications' : 
                 'SMS Notifications'}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Privacy Settings */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ borderBottom: '2px solid #28a745', paddingBottom: '5px' }}>
          🔒 Privacy Settings
        </h3>
        <div style={{ marginTop: '15px' }}>
          {Object.entries(settings.privacy).map(([key, value]) => (
            <label key={key} style={{ display: 'block', marginBottom: '10px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={value}
                onChange={() => handlePrivacyChange(key)}
                style={{ marginRight: '10px' }}
              />
              <span>
                {key === 'profileVisible' ? 'Make profile visible to public' : 
                 key === 'showEmail' ? 'Show email address publicly' : 
                 'Show phone number publicly'}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Preference Settings */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ borderBottom: '2px solid #ffc107', paddingBottom: '5px' }}>
          ⚙️ Application Preferences
        </h3>
        <div style={{ marginTop: '15px', display: 'grid', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Theme:
            </label>
            <select
              value={settings.preferences.theme}
              onChange={(e) => handlePreferenceChange('theme', e.target.value)}
              style={{
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                width: '200px'
              }}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Language:
            </label>
            <select
              value={settings.preferences.language}
              onChange={(e) => handlePreferenceChange('language', e.target.value)}
              style={{
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                width: '200px'
              }}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Timezone:
            </label>
            <select
              value={settings.preferences.timezone}
              onChange={(e) => handlePreferenceChange('timezone', e.target.value)}
              style={{
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                width: '200px'
              }}
            >
              <option value="UTC-8">Pacific Time (UTC-8)</option>
              <option value="UTC-5">Eastern Time (UTC-5)</option>
              <option value="UTC+0">Greenwich Time (UTC+0)</option>
              <option value="UTC+1">Central European Time (UTC+1)</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ 
        padding: '15px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '4px',
        border: '1px solid #dee2e6'
      }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          💡 <strong>Note:</strong> This is a nested route within the Profile component. 
          All settings changes are simulated and demonstrate React Router's nested routing capabilities.
        </p>
      </div>
    </div>
  );
};

export default ProfileSettings;
