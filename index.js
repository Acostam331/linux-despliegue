const express = require('express');
const app = express();

app.get('/', (_req, res) => {
  res.send('Hola amigos desde mi API');
});

module.exports = app;

if (require.main === module) {
  const PORT = 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
