angular.module('stockTracker.models.portfolios',[])

    .service('PortfoliosModel', function($http, $q) {
        var model = this,
            portfolios,
            currentPortfolio;

        var URLS = {
            PORTFOLIOS: 'data/portfolios.json'
        };

        function extract(result){
            return result.data;
        }

        function cachePortfolios(result) {
            portfolios = extract(result);
            return portfolios;
        }

        model.getPortfolios = function () {
            return (portfolios) ? $q.when(portfolios) : $http.get(URLS.PORTFOLIOS).then(cachePortfolios);
        };

        model.getCurrentPortfolio = function() {
            return currentPortfolio;
        };

        model.setCurrentPortfolio = function(portfolioName) {
            return model.getPortfolioByName(portfolioName).then(function(p){
                currentPortfolio = p;
            })
        };

        model.getCurrentPortfolioName = function(){
            return currentPortfolio ? currentPortfolio.name : '';
        };

        model.addStockToCurrentPortfolio = function(stock) {
            currentPortfolio.stocks.push(stock);
        };

        model.getPortfolioByName = function(portfolioName) {
            var deferred = $q.defer();

            function findPortfolio(){
                return _.find(portfolios, function(p){
                    return p.name == portfolioName;
                })
            }

            // if portfolios has already been loaded, retrieve from cache otherwise, lookup via resource
            if(portfolios) {
                deferred.resolve(findPortfolio());
            } else {
                model.getPortfolios()
                    .then(function() {
                        deferred.resolve(findPortfolio());
                    });
            }

            return deferred.promise;
        };

        model.addNewPortfolio = function(portfolio) {
            portfolios.push(portfolio);
        };
    })

;