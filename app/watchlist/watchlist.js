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

    .controller('WatchlistCtrl', function(MarketDataModel, PortfoliosModel) {
        var ctrl = this;

        ctrl.quotes = [];

        ctrl.getQuotes = function () {
            console.log('loading market data');

            var symbols = _.trim(ctrl.symbols, ',').split(',');

            function addToList(stock) {
                if (!stock.Symbol) return;

                // If existing, locate it's index
                var idx = _.findIndex(ctrl.quotes, function (obj, idx, arr) {
                    return obj.Symbol === stock.Symbol;
                });

                // Either update in place or append to list
                if (idx < 0) {
                    ctrl.quotes.push(stock);
                } else {
                    ctrl.quotes[idx] = stock;
                }
            };

            _.forEach(symbols, function (symbol) {
                MarketDataModel.getQuoteBySymbol(symbol)
                    .then(function (result) {
                        addToList(result);
                    });
            })
            //todo loader
            ctrl.symbols = '';
        };

        ctrl.delete = function (symbol) {
            console.log('deleting ' + symbol);
            var index = _.findIndex(ctrl.quotes,
                function (item) {
                    return item.Symbol === symbol;
                });
            _.pullAt(ctrl.quotes, index);
        };

        ctrl.save = function() {
            //todo convert watchlist to portfolio structure
            PortfoliosModel.addNewPortfolio();
        };
    })

;
