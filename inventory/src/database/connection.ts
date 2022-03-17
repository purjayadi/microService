import mongoose from 'mongoose';
import { DB_URL } from '../config';

export const Connection = async () => {
  mongoose.connect(DB_URL as string)
    // eslint-disable-next-line no-unused-vars
    .then((_res) => {
      console.log(
        'Connected to inventory Service API Database - Initial Connection'
      );
    })
    .catch((err) => {
      console.log(
        'Initial inventory Service API Database connection error occurred -',
        err
      );
    });
};
