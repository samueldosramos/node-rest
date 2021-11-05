const moment = require('moment');
const conexao = require('../infraestrutura/conexao');

class Atendimento {
  adiciona(atendimento) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss');
    const data = moment(atendimento.data, 'DD/MM/YYYY').format(
      'YYYY-MM-DD HH:mm:ss'
    );
    const atendimentoDatado = {
      ...atendimento,
      dataCriacao,
      data,
    };
    const sql = 'INSERT INTO atendimentos SET ?';

    conexao.query(sql, atendimentoDatado, (erro, resultados) => {
      if (erro) {
        throw erro;
      } else {
        console.log(resultados);
      }
    });
  }
}

module.exports = new Atendimento();
