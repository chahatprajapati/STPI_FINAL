import React from 'react';
import './ViewData.css';

const ViewData = ({ customerData, serviceData }) => {
  return (
    <div className="data-container">
      <h2 className="data-heading">View Data</h2>
      <div className="customer-data">
        <h3 className="data-subheading">Customer Data:</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Username</th>
              <th>Service Name</th>
            </tr>
          </thead>
          <tbody>
            {customerData.map((customer, index) => (
              <tr key={index}>
                <td>{customer.fullName}</td>
                <td>{customer.email}</td>
                <td>{customer.contact}</td>
                <td>{customer.username}</td>
                <td>{customer.serviceName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="service-data">
        <h3 className="data-subheading">Service Data:</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {serviceData.map((service, index) => (
              <tr key={index}>
                <td>{service.serviceName}</td>
                <td>{service.description}</td>
                <td>{service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewData;
