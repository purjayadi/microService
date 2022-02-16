import express from 'express'
import { Connection } from '../src/database'
import Router from './routes'

const app = express()
app.use(express.json()) // to support JSON-encoded bodies
app.use(
  express.urlencoded({
    extended: true
  })
)

Connection()
app.use('/api/v1', Router)

app.listen(3000, () => {
  console.log('Product service is listening on port 3000!')
})
