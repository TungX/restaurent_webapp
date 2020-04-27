const express = require('express');
const compression = require('compression');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});