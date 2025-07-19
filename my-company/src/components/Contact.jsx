import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ 
      padding: '40px 20px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '30px',
        textAlign: 'center'
      }}>Contact Us</h1>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={{ 
              display: 'block',
              width: '100%',
              padding: '12px',
              margin: '15px 0',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{ 
              display: 'block',
              width: '100%',
              padding: '12px',
              margin: '15px 0',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            style={{ 
              display: 'block',
              width: '100%',
              padding: '12px',
              margin: '15px 0',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px',
              resize: 'vertical',
              boxSizing: 'border-box'
            }}
            required
          />
          <button 
            type="submit"
            style={{
              backgroundColor: '#333',
              color: 'white',
              padding: '12px 30px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
