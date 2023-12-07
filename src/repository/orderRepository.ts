// orderRepository.ts
import { Pool } from 'pg'
import { OrderEntity } from '../entity/orderEntity'

const pool = new Pool()

export const createOrder = async (customerId: string, title: string, thumbnail: string): Promise<OrderEntity> => {
	const result = await pool.query('INSERT INTO orders (customer_id, title, thumbnail) VALUES ($1, $2, $3) RETURNING *', [
		customerId,
		title,
		thumbnail,
	])
	return result.rows[0]
}

export const cancelOrder = async (id: number): Promise<void> => {
	await pool.query('DELETE FROM orders WHERE id = $1', [id])
}

export const listOrders = async (limit: number, offset: number): Promise<OrderEntity[]> => {
	const result = await pool.query('SELECT * FROM orders ORDER BY created_at DESC LIMIT $1 OFFSET $2', [limit, offset])
	return result.rows
}

export const getOrderByCustomerId = async (customerId: string): Promise<OrderEntity[]> => {
	const result = await pool.query('SELECT * FROM orders WHERE customer_id = $1', [customerId])
	return result.rows
}
