// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import AdminPage from './AdminPage';
// // import CustomerListPage from './CustomerListPage';

// // const App = () => {
// //   const [customers, setCustomers] = useState([])
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/customer-list" element={<CustomerListPage customers={customers} />} />
// //         <Route path="/admin" element={<AdminPage customers={customers} setCustomers={setCustomers} />} />
// //         <Route path="/" element={<AdminPage />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;


// //new code

// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import AdminPage from './AdminPage';
// // import CustomerListPage from './CustomerListPage';

// // const App = () => {
// //   const [customers, setCustomers] = useState([]); // Remove this line

// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/customer-list" element={<CustomerListPage customers={customers} />} />
// //         <Route path="/admin" element={<AdminPage customers={customers} setCustomers={setCustomers} />} />
// //         <Route path="/" element={<AdminPage />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;

// //new code


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AdminPage from './AdminPage';
// import CustomerListPage from './CustomerListPage';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/customer-list" element={<CustomerListPage />} />
//         <Route path="/admin" element={<AdminPage />} />
//         <Route path="/" element={<AdminPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// //right code upto client page

// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import AdminPage from './AdminPage';
// // import CustomerListPage from './CustomerListPage';

// // const App = () => {
// //   const [customers, setCustomers] = useState([]);

// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/customer-list" element={<CustomerListPage customers={customers} />} />
// //         <Route path="/admin" element={<AdminPage customers={customers} setCustomers={setCustomers} />} />
// //         <Route path="/" element={<AdminPage setCustomers={setCustomers} />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;

// //Adding service page-update


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AdminPage from './AdminPage';
// import CustomerListPage from './CustomerListPage';
// import ServicesPage from './ServicesPage'; // Import the ServicesPage component

// const App = () => {
//   const [customers, setCustomers] = useState([]); // Initialize customers state

//   return (
//     <Router>
//       <Routes>
//         <Route path="/customer-list" element={<CustomerListPage customers={customers} />} />
//         {/* Pass customers and setCustomers to AdminPage */}
//         <Route path="/admin" element={<AdminPage customers={customers} setCustomers={setCustomers} />} />
//         {/* Add the new route for ServicesPage */}
//         <Route path="/services" element={<ServicesPage customers={customers} />} />
//         <Route path="/" element={<AdminPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// //upto this code everything is ok but when we are clicking on the add service there is a error

// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Home from './Home'; // Import the Home component
// // import AdminPage from './AdminPage';
// // import ServicesPage from './ServicesPage';
// // import CustomerListPage from './CustomerListPage';

// // function App() {
// //   return (
// //     <Router>
// //       <div className="App">
// //         <Routes>
// //           <Route path="/" element={<Home />} /> {/* Define route for the root path */}
// //           <Route path="/admin" element={<AdminPage />} />
// //           <Route path="/services" element={<ServicesPage />} />
// //           <Route path="/customers" element={<CustomerListPage />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;


//new code 
// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom'; // Remove BrowserRouter and use only Routes
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Services from './Services';
// import Gallery from './Gallery';
// import NotFound from './NotFound';

// function App() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//           <li>
//             <Link to="/services">Services</Link>
//           </li>
//           <li>
//             <Link to="/gallery">Gallery</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes> {/* Use only Routes here */}
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/" element={<Home />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
// wrong data but it is working

// import React, { useState } from 'react';
// import { Link, Routes,Route } from 'react-router-dom';
// import AddCustomer from './AddCustomer';
// import AddService from './AddServiceForm';
// import ViewData from './ViewData';

// function App() {
//   const [customerData, setCustomerData] = useState([]);
//   const [serviceData, setServiceData] = useState([]);

//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/add-customer">Add Customer</Link>
//           </li>
//           <li>
//             <Link to="/add-service">Add Service</Link>
//           </li>
//           <li>
//             <Link to="/view-data">View Data</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route
//           path="/add-customer"
//           element={<AddCustomer setCustomerData={setCustomerData} />}
//         />
//         <Route
//           path="/add-service"
//           element={<AddService setServiceData={setServiceData} />}
//         />
//         <Route
//           path="/view-data"
//           element={<ViewData customerData={customerData} serviceData={serviceData} />}
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// ^code is correct and data is also displaying but working in the form of link

import React, { useState } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import AddCustomerForm from './AddCustomerForm';
import AddServiceForm from './AddServiceForm';
import ViewData from './ViewData';
import './App.css';

function App() {
  const [customerData, setCustomerData] = useState([]);
  const [serviceData, setServiceData] = useState([]);

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Add Customer</Link>
          </li>
          <li>
            <Link to="/add-service">Add Service</Link>
          </li>
          <li>
            <Link to="/view-data">View Data</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<AddCustomerForm customerData={customerData} setCustomerData={setCustomerData} />}
        />
        <Route
          path="/add-service"
          element={<AddServiceForm setServiceData={setServiceData} />}
        />
        <Route
          path="/view-data"
          element={<ViewData customerData={customerData} serviceData={serviceData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
