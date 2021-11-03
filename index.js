const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

app.get('/atendimentos', (req, res) => {
  res.send('Rota de atendimentos');
});
