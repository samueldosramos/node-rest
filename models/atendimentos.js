import moment from 'moment';
import { query } from '../infraestrutura/conexao';

class Service {
  addService(service, res) {
    const creationDate = moment().format('YYYY-MM-DD HH:mm:ss');
    const date = moment(service.date, 'DD/MM/YYYY').format(
      'YYYY-MM-DD HH:mm:ss'
    );

    const validDate = moment(date).isSameOrAfter(creationDate);
    const validCustomer = service.customer.length >= 5;

    const validates = [
      {
        name: 'date',
        isValid: validDate,
        message: 'Date must be greater than or equal to current date',
      },
      {
        name: 'customer',
        isValid: validCustomer,
        message: 'Customer must be at least five characters long',
      },
    ];

    const errors = validates.filter((field) => !field.isValid);
    const hasErrors = errors.length;

    if (hasErrors) {
      res.status(400).json(errors);
    } else {
      const datedService = { ...service, creationDate, date };

      const sql = 'INSERT INTO services SET ?';

      query(sql, datedService, (error, results) => {
        if (error) {
          res.status(400).json(error);
        } else {
          res.status(201).json(service);
        }
      });
    }
  }

  getServices(res) {
    const sql = 'SELECT * FROM services';

    query(sql, (error, results) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json(results);
      }
    });
  }

  searchById(id, res) {
    const sql = 'SELECT * FROM services WHERE id = ?';

    query(sql, id, (error, results) => {
      const service = results[0];

      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json(service);
      }
    });
  }

  updateService(id, service, res) {
    if (service.date) {
      service.date = moment(service.date, 'DD/MM/YYYY').format(
        'YYYY-MM-DD HH:mm:ss'
      );
    }

    const sql = 'UPDATE services SET ? WHERE id = ?';

    query(sql, [service, id], (error, results) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json({ ...service, id });
      }
    });
  }

  deleteService(id, res) {
    const sql = 'DELETE FROM services WHERE id = ?';

    query(sql, id, (error, results) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json({ id });
      }
    });
  }
}

export default new Service();
