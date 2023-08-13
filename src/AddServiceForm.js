// import React, { useState } from 'react';

// const AddServiceForm = ({ setServiceData }) => {
//   const [serviceName, setServiceName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newServiceData = {
//       serviceName,
//       description,
//       price,
//     };

//     // Update the serviceData state in the parent component (App.js)
//     setServiceData((prevData) => [...prevData, newServiceData]);

//     // Reset the form fields after submitting
//     setServiceName('');
//     setDescription('');
//     setPrice('');
//   };

//   return (
//     <div>
//       <h2>Add Service</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Service Name:
//           <input type="text" value={serviceName} onChange={(e) => setServiceName(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Description:
//           <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Price:
//           <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddServiceForm;

// ^ code is right but data is shown in link and with these now as a change we have add AddCustomerForm.js file 

import React, { useState } from 'react';
import './AddServiceForm.css';

const AddServiceForm = () => {
  const [serviceName, setServiceName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidServiceData(serviceName, description, price)) {
      alert('Please enter valid data for service name, description, and price.');
      return;
    }

    const newServiceData = {
      serviceName,
      description,
      price,
    };

    try {
      const response = await fetch('/api/add-service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newServiceData),
      });

      if (response.ok) {
        alert('Service added successfully!');
      } else {
        const data = await response.json();
        alert('Failed to add service: ' + data.error);
      }
    } catch (error) {
      console.error('Error adding service:', error);
      alert('An error occurred while adding the service.');
    }

    setServiceName('');
    setDescription('');
    setPrice('');
  };

  const isValidServiceData = (serviceName, description, price) => {
    return serviceName.trim() !== '' && description.trim() !== '' && price.trim() !== '';
  };

  return (
    <div className="form-container">
      <h2>Add Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Service Name:</label>
          <input
            type="text"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-textarea"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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

export default AddServiceForm;
