angular.module('watchlist', [
    'stockTracker.models.stockData'])

    .config(function($stateProvider){
        $stateProvider.state('stockTracker.watchlist', {
            url: '/watchlist',
            views: {
                'watchlist@': {
                    controller: 'WatchlistCtrl as watchlist',
                    templateUrl: 'app/watchlist/watchlist.tmpl.html'

                }
            }
        })
    })

    .controller('WatchlistCtrl', function(MarketDataModel) {
        var watchlist = this;

        watchlist.quotes = [];

        watchlist.getQuotes = function () {
            console.log('loading market data');

            var symbols = _.trim(watchlist.symbols, ',').split(',');

            function addToList(stock) {
                if (!stock.Symbol) return;

                // If existing, locate it's index
                var idx = _.findIndex(watchlist.quotes, function (obj, idx, arr) {
                    return obj.Symbol === stock.Symbol;
                });

                // Either update in place or append to list
                if (idx < 0) {
                    watchlist.quotes.push(stock);
                } else {
                    watchlist.quotes[idx] = stock;
                }
            };

            _.forEach(symbols, function (symbol) {
                MarketDataModel.getQuoteBySymbol(symbol)
                    .then(function (result) {
                        addToList(result);
                    });
            })
        };

        watchlist.delete = function (symbol) {
            console.log('deleting ' + symbol);
            var index = _.findIndex(watchlist.quotes,
                function (item) {
                    return item.Symbol === symbol;
                });
            _.pullAt(watchlist.quotes, index);
        };
    })

;
