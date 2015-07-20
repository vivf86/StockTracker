angular.module('portfolios.portfolio.addStock', [
    'stockTracker.models.stockData'])
    .config(function ($stateProvider) {

        $stateProvider.state('stockTracker.portfolios.portfolio.addStock', {
            url: '/add',
            controller: 'AddStockCtrl as addStockCtrl',
            templateUrl: 'app/portfolios/portfolio/addStock/add-stock.tmpl.html'
        })
    })

    .controller('AddStockCtrl', function($state, $stateParams, PortfoliosModel) {
        var addStockCtrl = this;

        function returnToPortfolio () {
            $state.go('stockTracker.portfolios.portfolio', {'portfolioName': $stateParams.portfolioName});
        }

        addStockCtrl.cancel = function() {
            returnToPortfolio();
        };

        addStockCtrl.add = function () {
            PortfoliosModel.addStockToCurrentPortfolio({
                stockCode: addStockCtrl.stockCode,
                entryDate: new Date(addStockCtrl.entryDate),
                entryPrice: addStockCtrl.entryPrice
            });
            returnToPortfolio();
        };
    })
;
