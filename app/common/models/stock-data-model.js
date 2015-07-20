angular.module('stockTracker.models.stockData', [])

    .service('MarketDataModel', function($http) {
        var model = this;

        var URLS = {
            QUOTE: 'http://dev.markitondemand.com/Api/v2/Quote/json',
            LOOKUP: 'http://dev.markitondemand.com/Api/v2/Lookup/json'
        };

        function extract(result){
            return result.data;
        };

        model.getQuoteBySymbol = function (symbol) {
            return $http.get(
                URLS.QUOTE,
                {
                    params: {
                        symbol: symbol
                    }
                }
            ).then(extract);
        };
    })
;
