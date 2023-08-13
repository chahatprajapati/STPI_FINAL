import React, { useState } from 'react';
import './AddCustomerForm.css';

const AddCustomerForm = ({ customerData, setCustomerData }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [username, setUsername] = useState('');
  const [serviceName, setServiceName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if a customer with the same username already exists
    const isDuplicate = customerData.some((customer) => customer.username === username);

    if (isDuplicate) {
      // Show a validation message for duplicate data
      alert('Customer with the same username already exists!');
      return;
    }

    // Add validations here
    if (!isValidEmail(email) || !isValidContact(contact) || !isValidUsername(username)) {
      alert('Please enter valid data for email, contact, and username.');
      return;
    }

    const newCustomerData = {
      fullName,
      email,
      contact,
      username,
      serviceName,
    };

    try {
      const response = await fetch('http://localhost:5000/api/add-customer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCustomerData),
      });

      if (response.ok) {
        const addedCustomer = await response.json();
        setCustomerData((prevData) => [...prevData, addedCustomer]);

        // Reset the form fields after successful submission
        setFullName('');
        setEmail('');
        setContact('');
        setUsername('');
        setServiceName('');

        alert('Customer added successfully!');
      } else {
        alert('Failed to add customer. Please try again.');
      }
    } catch (error) {
      console.error('Error adding customer:', error);
      alert('An error occurred while adding customer.');
    }
  };

  // Helper functions for validations
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isValidContact = (contact) => {
    const contactPattern = /^[0-9]{10}$/;
    return contactPattern.test(contact);
  };

  const isValidUsername = (username) => {
    const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
    return usernamePattern.test(username);
  };

  return (
    <div className="form-container">
      <h2>Add Customer</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Contact:</label>
          <input
            type="tel"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Service Name:</label>
          <input
            type="text"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCustomerForm;
