import express from 'express';
import consign from 'consign';
import { urlencoded, json } from 'body-parser';

export default () => {
  const app = express();

  app.use(urlencoded({ extended: true }));
  app.use(json());

  consign().include('controllers').into(app);

  return app;
};
