import customExpress from './config/customExpress';
import connection, { connect } from './infraestrutura/conexao';
import { init } from './infraestrutura/tabelas';

connect((error) => {
  if (error) {
    console.log('Could not connect to database.');
  } else {
    console.log('Database connection established successfully.');

    init(connection);
    const app = customExpress();

    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  }
});
