import {
  addService,
  deleteService,
  getServices,
  searchById,
  updateService,
} from '../models/atendimentos';

export default (app) => {
  app.get('/atendimentos', (req, res) => {
    getServices(res);
  });

  app.get('/atendimentos/:id', (req, res) => {
    searchById(req.params.id, res);
  });

  app.post('/atendimentos', (req, res) => {
    const service = req.body;

    addService(service, res);
  });

  app.patch('/atendimentos/:id', (req, res) => {
    const id = req.params.id;
    const service = req.body;

    updateService(id, service, res);
  });

  app.delete('/atendimentos/:id', (req, res) => {
    const id = req.params.id;

    deleteService(id, res);
  });
};
