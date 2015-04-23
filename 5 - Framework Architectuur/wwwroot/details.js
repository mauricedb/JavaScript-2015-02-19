
(function () {

    function getURLParameter(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
    }

	var article = getURLParameter('article');

   $.getJSON('/articles.json?article='+ article).then(function(data){
		$('#placeholder').text(article);

   });

   $('#home').click(function(){
		window.location = 'index.html'
   });
}());