import express from 'express';
import { Connection } from '../src/database';
import { Item, Category, Variant } from './api';

const app = express();
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({
  extended: true
})
);

Connection();
Item(app);
Category(app);
Variant(app);

app.listen(3000, () => {
  console.log('Product service is listening on port 3000!');
});
