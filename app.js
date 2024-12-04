const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const redirectUrl = process.env.REDIRECT_URL;

app.get('*', (req, res) => {
  if (!redirectUrl) {
    return res.status(400).json({
      error: req.baseUrl + ' is currently not available.',
      status: 400,
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }
  res.redirect(redirectUrl);
});

app.listen(port, () => {
  console.log(`Server  running on port ${port}`);
  console.log(`Redirect URL: ${redirectUrl || 'not configured'}`);
});