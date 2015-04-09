
(function () {
    $(document).on(eventNames.articlesLoaded, function (e, articles) {
        console.table(articles.articles)
    });

}());