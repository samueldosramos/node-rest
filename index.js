const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

conexao.connect((erro) => {
  if (erro) {
    console.log('Não foi possível conectar ao banco de dados.');
  } else {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    Tabelas.init(conexao);
    const app = customExpress();

    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  }
});
