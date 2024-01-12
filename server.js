const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nano = require('nano')('http://localhost:5984'); // Update with your CouchDB URL

const app = express();
const port = 3000;
app.use(cors());

// Middleware
app.use(bodyParser.json());

// CouchDB connection
const db = nano.use('customer'); // Update with your CouchDB database name

// API endpoint for posting data
app.post('/api/customer', async (req, res) => {
  const document = req.body;

  try {
    const response = await db.insert(document);
    res.json({ success: true, id: response.id, rev: response.rev });
  } catch (error) {
    console.error('Error inserting document:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
