const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const botServerUrl = process.env.BOT_SERVER_URL || '';

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.get('/config', (req, res) => {
  res.json({ botServerUrl });
});

app.get('/', (req, res) => {
  res.send(`Bot server running. BOT_SERVER_URL=${botServerUrl || '<not set>'}`);
});

app.listen(port, () => {
  console.log(`Bot server listening on port ${port}`);
  console.log(`BOT_SERVER_URL=${botServerUrl}`);
});
