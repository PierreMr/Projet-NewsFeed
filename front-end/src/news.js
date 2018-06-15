import axios from 'axios'

var news = axios
	.get('http://localhost:8080/news')
	.then((response) => {
		return response.data.articles
	})

const w = new WebSocket('ws://localhost:8888')

function isOdd(num) { return num % 2;}

var count = 0
news.then(function(result) {
	result.forEach(function(element) {
		var article = document.createElement('article')
		article.className += 'row mt-5'
		article.id = 'article'+(count+1)
		article.innerHTML += '<h4 class="col-lg-12">'+element.title+'</h4>'
		if (isOdd(count)) {
			if (element.urlToImage != null) article.innerHTML += '<div class="col-lg-4 mb-3"><a href="'+element.url+'" target="_blank"><img src="'+element.urlToImage+'" width="100%"></a></div>'
			if (element.description != null) article.innerHTML += '<p class="col-lg-8 text-justify">'+element.description+'</p>'
		}
		else {
			if (element.description != null) article.innerHTML += '<p class="col-lg-8 text-justify">'+element.description+'</p>'			
			if (element.urlToImage != null) article.innerHTML += '<div class="col-lg-4 mb-3"><a href="'+element.url+'" target="_blank"><img src="'+element.urlToImage+'" width="100%"></a></div>'
		}
		if (element.author != null) article.innerHTML += '<footer class="col-lg-12"><em>'+element.author+'</em></footer>'

		w.send(element)
		console.log(element)
		
		document.getElementById('articles').prepend(article)

		count++
	})
})

export {news}
export {w}