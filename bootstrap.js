const express = require('express');
const app = express();

app.get('/bootstrap', (req, res) => {
  res.json({
    apiBaseUrl: process.env.API_URL
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Bootstrap server running on port ${PORT}`);
});
