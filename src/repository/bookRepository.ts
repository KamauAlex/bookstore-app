// bookRepository.ts
import { Pool } from 'pg'
import { BookEntity } from '../entity/bookEntity'

const pool = new Pool()

export const getAllBooks = async (): Promise<BookEntity[]> => {
	const result = await pool.query('SELECT * FROM books')
	return result.rows
}

export const getBookById = async (id: number): Promise<BookEntity | null> => {
	const result = await pool.query('SELECT * FROM books WHERE id = $1', [id])
	return result.rows[0] || null
}
