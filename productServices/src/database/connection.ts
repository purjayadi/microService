import mongoose from 'mongoose'
import { DB_URL } from '../config'

export const Connection = async () => {
  mongoose.connect(DB_URL as string)
    .then((res) => {
      console.log(
        'Connected to Product Service API Database - Initial Connection'
      )
    })
    .catch((err) => {
      console.log(
        'Initial Product Service API Database connection error occurred -',
        err
      )
    })
}
