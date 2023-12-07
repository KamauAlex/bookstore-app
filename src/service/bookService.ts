// bookService.ts
import * as bookRepository from '../repository/bookRepository'

export const getAllBooks = async () => {
	return bookRepository.getAllBooks()
}

export const getBookById = async (id: number) => {
	return bookRepository.getBookById(id)
}
