import axios from 'axios'

var news = axios
	.get('http://localhost:8080/news')
	.then((response) => {
		return response.data.articles
	})

// var news2String = JSON.parse(news)
// console.log(news2String)


// setInterval(function() {
// 	news = axios
// 	.get('http://localhost:8080/news')
// 	.then((response) => {
// 		return response.data.articles
// 	})

// 	var newsString = JSON.stringify(news)
// 	console.log(newsString)

// 	if (newsString == news2String) {
// 		console.log('Same shit !')
// 	}
// 	else {
// 		console.log('Not the same shit !')

// 		news.then(function(result) {
// 			result.forEach(function(element) {
// 				var article = document.createElement('article')
// 				article.className += 'mt-5'
// 				article.innerHTML += '<h4>'+element.title+'</h4>'+
// 				'<a href="'+element.url+'" target="_blank"><img src="'+element.urlToImage+'" width="20%"></a>'+
// 				'<p>'+element.description+'</p>'+
// 				'<footer><em>'+element.author+'</em></footer>'

// 				document.getElementById('articles').prepend(article)
// 			})
// 		})
// 	}
// }, 3000);

news.then(function(result) {
	result.forEach(function(element) {
		var article = document.createElement('article')
		article.className += 'mt-5'
		article.innerHTML += '<h4>'+element.title+'</h4>'+
		'<a href="'+element.url+'" target="_blank"><img src="'+element.urlToImage+'" width="20%"></a>'+
		'<p>'+element.description+'</p>'+
		'<footer><em>'+element.author+'</em></footer>'

		document.getElementById('articles').prepend(article)

		// var article = document.getElementById('articles').innerHTML += '<article class="mb-5">'+
		// '<h4>'+element.title+'</h4>'+
		// '<a href="'+element.url+'" target="_blank"><img src="'+element.urlToImage+'" width="20%"></a>'+
		// '<p>'+element.description+'</p>'+
		// '<footer><em>'+element.author+'</em></footer>'+
		// '</article>'
	})
})

export {news}