/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Get a list of orders.
 *     responses:
 *       200:
 *         description: A list of orders.
 */
import express from 'express'
import * as orderService from '../service/orderService'

const router = express.Router()

router.post('/', async (req, res) => {
	const { customer_id, thumbnail, title } = req.body
	const newOrder = await orderService.createOrder(customer_id, title, thumbnail)
	res.json(newOrder)
})

router.delete('/:id', async (req, res) => {
	const orderId = parseInt(req.params.id, 10)
	await orderService.cancelOrder(orderId)
	res.json({ message: 'Order canceled successfully' })
})

router.get('/', async (req, res) => {
	// Updated the types here
	const limit = req.query.limit as string | undefined
	const offset = req.query.offset as string | undefined

	const orders = await orderService.listOrders(limit ? parseInt(limit, 10) : 10, offset ? parseInt(offset, 10) : 0)

	res.json(orders)
})

router.get('/:customer_id', async (req, res) => {
	const customerId = req.params.customer_id

	const orders = await orderService.getOrderByCustomerId(customerId)

	res.json(orders)
})

export default router
