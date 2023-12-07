/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get a list of books.
 *     responses:
 *       200:
 *         description: A list of books.
 */

import express from 'express'
import * as bookService from '../service/bookService'

const router = express.Router()

router.get('/', async (req, res) => {
	const books = await bookService.getAllBooks()
	res.json(books)
})

router.get('/:id', async (req, res) => {
	const bookId = parseInt(req.params.id, 10)
	const book = await bookService.getBookById(bookId)

	if (book) {
		res.json(book)
	} else {
		res.status(404).json({ error: 'Book not found' })
	}
})

export default router
