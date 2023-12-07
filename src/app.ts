// app.ts
import express from 'express'
import cors from 'cors'
import bookController from './controller/bookController'
import customerController from './controller/customerController'
import orderController from './controller/orderController'
import { specs, swaggerUi } from '../swagger'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

// Book routes
app.use('/api/books', bookController)

// Customer routes
app.use('/api/customers', customerController)

// Order routes
app.use('/api/orders', orderController)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
