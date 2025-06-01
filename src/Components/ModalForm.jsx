import React, { useState } from 'react';

const ModalForm = ({ show, onClose }) => {
  const [form, setForm] = useState({
    email: '',
    phone: '',
    website: '',
    company: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    onClose();
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{
        background: '#fff', padding: 24, borderRadius: 8, minWidth: 320, boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
      }}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label><br />
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Phone Number:</label><br />
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
          </div>
          <div>
            <label>Website URL:</label><br />
            <input type="url" name="website" value={form.website} onChange={handleChange} required />
          </div>
          <div>
            <label>Company Name:</label><br />
            <input type="text" name="company" value={form.company} onChange={handleChange} required />
          </div>
          <div style={{ marginTop: 16, display: 'flex', justifyContent: 'flex-end' }}>
            <button type="button" onClick={onClose} style={{ marginRight: 8 }}>Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;