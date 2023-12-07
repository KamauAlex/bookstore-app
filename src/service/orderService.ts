// orderService.ts
import * as orderRepository from '../repository/orderRepository'

export const createOrder = async (customerId: string, title: string, thumbnail: string) => {
	console.log('Customer ID:', customerId) // Add this line to check the value
	return orderRepository.createOrder(customerId, title, thumbnail)
}

export const cancelOrder = async (id: number) => {
	return orderRepository.cancelOrder(id)
}

export const listOrders = async (limit: number, offset: number) => {
	return orderRepository.listOrders(limit, offset)
}

export const getOrderByCustomerId = async (customerId: string) => {
	return orderRepository.getOrderByCustomerId(customerId)
}
