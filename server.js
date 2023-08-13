// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;
// const mongoose = require('mongoose');
// const apiRoutes = require('./apiRoutes');
// mongoose.connect('mongodb://localhost:27017/<databaseName>', { useNewUrlParser: true, useUnifiedTopology: true });


// // ...

// app.use('/api', apiRoutes);

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/your-database-name', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('Connected to MongoDB');
// })
// .catch((error) => {
//   console.error('Error connecting to MongoDB:', error);
// });

// // Middleware
// app.use(express.json());

// // Routes
// // Define your API routes here

// // Start server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
// server.js




// // const express = require('express');
// // const app = express();
// // const cors = require('cors'); // Import the cors module
// // const port = 5000;
// // const mongoose = require('mongoose');
// // const apiRoutes = require('./apiRoutes');

// // app.use(express.json());
// // app.use(cors());

// // app.use('/api', apiRoutes);

// // mongoose.connect('mongodb://127.0.0.1:27017/local', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// // const db = mongoose.connection;
// // db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// // db.once('open', () => {
// //   console.log('Connected to MongoDB');
// // });

// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });






// // Import the express library
// const express = require('express');
// const cors = require('cors');

// // Create an instance of the express application
// const server = express();
// server.use(cors());

// // Define a route for the root URL ('/') that sends a response
// server.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // Start the server and listen on a specific port (e.g., 3000)
// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/local', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const customerSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  contact: String,
  username: String,
  serviceName: String,
});

const Customer = mongoose.model('Customer', customerSchema);

const serviceSchema = new mongoose.Schema({
  serviceName: String,
  description: String,
  price: String,
});

const Service = mongoose.model('Service', serviceSchema);

app.get('/', (req, res) => {
  res.send('Hello, World! This is the backend.');
});

app.post('/api/add-customer', async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    console.error('Error adding customer:', error);
    res.status(500).json({ error: 'Failed to add customer' });
  }
});

app.post('/api/add-service', async (req, res) => {
  try {
    const newService = new Service(req.body);
    await newService.save();
    res.status(201).json(newService);
  } catch (error) {
    console.error('Error adding service:', error);
    res.status(500).json({ error: 'Failed to add service' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
