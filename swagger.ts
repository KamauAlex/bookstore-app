// swagger.js
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Bookstore API',
			version: '1.0.0',
			description: 'API documentation for the Bookstore application',
		},
		servers: [
			{
				url: 'http://localhost:3000',
			},
		],
	},
	apis: ['./src/controller/*.ts'], // Path to your controller files
}

const specs = swaggerJsdoc(options)

export { specs, swaggerUi }
