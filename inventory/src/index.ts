import express from 'express';
import { Connection } from '../src/database';
import { Warehouse, Inventory, AppEvents } from './api';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({
  extended: true
})
);

Connection();
Warehouse(app);
Inventory(app);
AppEvents(app);

app.listen(3001, () => {
  console.log('Inventory service is listening on port 3001!');
});
