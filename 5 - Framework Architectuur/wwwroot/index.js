
(function () {

	var routes = {
		'/articles': function(){

			$.getJSON('/articles.json').then(function(data){

				var list = $('<ul>');

				data.forEach(function(article){
					$('<li>').append(
						$('<a>')
							.text(article.article)
							.attr('href', '#/article/' + article.article)
							//.click(function(){
							//	$('#placeholder').text(article.article)
							//})
					)
						.appendTo(list);
				});

				$('#placeholder').empty().append(list);
			});
		},
		'/article/:article': function(article){
			var save = $('<button>').text(article)
				.click(function(){
					//window.location = "#/articles"
					router.setRoute("/articles");
				});

			$('#placeholder').empty().append(save);
		}
	};

	var router = Router(routes);

	router.init('/articles');



}());