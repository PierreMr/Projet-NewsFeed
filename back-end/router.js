const express = require('express')
const axios = require('axios')

const router = express.Router()

router.route('/').get(function(request, response) {
    response.send('Hello World')
})


// News

router.route('/news').get(function(request, response) {
	var news = axios
	.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=8b710e6901d84effaccff18f59f8f165')
	.then((httpResponse) => response.send(httpResponse.data))
})

module.exports = router
