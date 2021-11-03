module.exports = (app) => {
  app.get('/atendimentos', (req, res) => {
    res.send('Rota de atendimentos');
  });
};
