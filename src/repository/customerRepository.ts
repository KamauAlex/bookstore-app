// customerRepository.ts
import { Pool } from 'pg'
import { CustomerEntity } from '../entity/customerEntity'

const pool = new Pool()

export const createCustomer = async (customer: CustomerEntity): Promise<CustomerEntity> => {
	console.log(customer)
	const result = await pool.query('INSERT INTO customers (name,id) VALUES ($1,$2) RETURNING *', [customer.name, customer.id])
	return result.rows[0]
}

export const getCustomerById = async (id: number): Promise<CustomerEntity | null> => {
	const result = await pool.query('SELECT * FROM customers WHERE id = $1', [id])
	return result.rows[0] || null
}
