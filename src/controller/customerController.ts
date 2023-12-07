/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: Get a list of customers.
 *     responses:
 *       200:
 *         description: A list of customers.
 */

import express from 'express'
import * as customerService from '../service/customerService'

const router = express.Router()

router.post('/', async (req, res) => {
	const customer = req.body

	const newCustomer = await customerService.createCustomer(customer)
	res.json(newCustomer)
})

router.get('/:id', async (req, res) => {
	const customerId = parseInt(req.params.id, 10)
	const customer = await customerService.getCustomerById(customerId)

	if (customer) {
		res.json(customer)
	} else {
		res.status(404).json({ error: 'Customer not found' })
	}
})

export default router
