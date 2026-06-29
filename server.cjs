// Backend server for BPDACC Inventory (Node 14 compatible)
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// PostgreSQL setup (you'll need to install pg: npm install pg)
// const { Pool } = require('pg');
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'bpdacc_inventory',
//   password: 'your_password',
//   port: 5432,
// });

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());

// Example API endpoints (replace with real database calls)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'BPDACC Inventory API is running!' });
});

// Example: Get all inventory items (from DB later)
app.get('/api/inventory', (req, res) => {
  const mockInventory = [
    { id: 1, name: 'Syringes 5ml', stock: 120 },
    { id: 2, name: 'Gauze Pads', stock: 45 }
  ];
  res.json(mockInventory);
});

// Send React app for any unknown paths
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(`🚀 BPDACC Inventory Server is running!`);
  console.log(`📍 Open in browser: http://localhost:${PORT}`);
  console.log(`=================================================`);
  console.log(`Press Ctrl+C to stop the server`);
  console.log(`=================================================`);
});
