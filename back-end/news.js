import {axios} from 'axios'

var news = axios
	.get('http://localhost:8080/news')
	.then((response) => {
		return response.data.articles
	})

const w = new WebSocket('ws://localhost:8888')


news.then(function(result) {
	result.forEach(function(element) {
		var article = document.createElement('article')
		article.className += 'mt-5'
		article.innerHTML += '<h4>'+element.title+'</h4>'
		if (element.urlToImage != null) article.innerHTML += '<a href="'+element.url+'" target="_blank"><img src="'+element.urlToImage+'" width="20%"></a>'
		if (element.description != null) article.innerHTML += '<p>'+element.description+'</p>'
		if (element.author != null) article.innerHTML += '<footer><em>'+element.author+'</em></footer>'
		
		document.getElementById('articles').prepend(article)
	})
})

