angular.module('portfolios.portfolio',[
    'portfolios.portfolio.addStock',
    'stockTracker.models.portfolios',
    'portfolios.portfolio.edit'
])
    .config(function ($stateProvider) {

        $stateProvider.state('stockTracker.portfolios.portfolio', {
            url: '/:portfolioName',
            views: {
                'currentPortfolio': {
                    controller: 'PortfolioCtrl as portfolioCtrl',
                    templateUrl: 'app/portfolios/portfolio/portfolio.tmpl.html'
                }
            }
        })
    })

    .controller('PortfolioCtrl', function($stateParams, PortfoliosModel) {
        var ctrl = this;

        PortfoliosModel.setCurrentPortfolio($stateParams.portfolioName).then(function(){
            ctrl.portfolio = PortfoliosModel.getCurrentPortfolio();
        });

        //functions to modify the portfolio in place

        ctrl.updatePrices = function() {
            //todo call market data model to update all the prices
        }
    })
;