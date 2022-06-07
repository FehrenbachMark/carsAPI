const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const cars = {
	'toyota': {
		'type': 'Corolla',
		'origin': 'Japan',
		'engineSize': '4 cylinder',
		'zeroToSixtySeconds': 10,
		'gasoline': true,
		'electric': 'false'
	},
	'honda': {
		'type': 'civic',
		'origin': 'Japan',
		'engineSize': '4 cylinder',
		'zeroToSixtySeconds': 9,
		'gasoline': true,
		'electric': 'false'
	},
	'tesla': {
		'type': 'Model y',
		'origin': 'USA',
		'engineSize': 'N/A',
		'zeroToSixtySeconds': 3,
		'gasoline': false,
		'electric': 'true'
	},
	'unknown': {
		'type': 'unknown',
		'origin': 'unknown',
		'engineSize': 'N/A',
		'zeroToSixtySeconds': 'unknown',
		'gasoline': 'unknown',
		'electric': 'unknown'
	}
}


app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
	const carName = request.params.name.toLowerCase()
	if(cars[carName]){
		response.json(cars[carName])
	}else{
		response.json(cars['unknown'])
	}
})


app.listen(process.env.port || PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})