class Table {
  init(connection) {
    this.connection = connection;

    this.createService();
  }

  createService() {
    const sql =
      'CREATE TABLE IF NOT EXISTS services (id int NOT NULL AUTO_INCREMENT, customer varchar(50) NOT NULL, pet varchar(20), service varchar(20) NOT NULL, date datetime NOT NULL, creationDate datetime NOT NULL, status varchar(20) NOT NULL, note text, PRIMARY KEY (id))';

    return this.connection.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Service table created successfully!');
      }
    });
  }
}

export default new Table();
