// customerService.ts
import { CustomerEntity } from '../entity/customerEntity'
import * as customerRepository from '../repository/customerRepository'

export const createCustomer = async (customer: CustomerEntity) => {
	return customerRepository.createCustomer(customer)
}

export const getCustomerById = async (id: number) => {
	return customerRepository.getCustomerById(id)
}
