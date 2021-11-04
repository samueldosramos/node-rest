module.exports = (app) => {
  app.get('/atendimentos', (req, res) => {
    res.send('Get realizado na rota de atendimentos');
  });

  app.post('/atendimentos', (req, res) => {
    console.log(req.body);
    res.send('Post realizado na rota de atendimentos');
  });
};
