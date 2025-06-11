const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/', userRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});


// This are the requirements for submitting    1. express.js application code  2. database connection configuration   3. API endpoints implementation    4. brief documentation on how to run your project