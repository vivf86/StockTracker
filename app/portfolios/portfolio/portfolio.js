angular.module('portfolios.portfolio',[
    'portfolios.portfolio.addStock',
    'stockTracker.models.portfolios'
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
        var portfolioCtrl = this;

        PortfoliosModel.setCurrentPortfolio($stateParams.portfolioName).then(function(){
            portfolioCtrl.portfolio = PortfoliosModel.getCurrentPortfolio();
        });

        //functions to modify the portfolio in place
    })
;