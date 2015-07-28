angular.module('portfolios', [
    'stockTracker.models.portfolios',
    'portfolios.portfolio',
    'portfolios.portfolio.edit'
])
    .config(function ($stateProvider) {
        $stateProvider.state('stockTracker.portfolios', {
            url: '/portfolios',
            views: {
                'portfolios@': {
                    controller: 'PortfoliosCtrl as portfoliosCtrl',
                    templateUrl: 'app/portfolios/portfolios.tmpl.html'
                }
            }
        })
    })

    .controller('PortfoliosCtrl', function(PortfoliosModel) {
        var ctrl = this;

        PortfoliosModel.getPortfolios()
            .then(function(result){
                ctrl.portfolios = result;
            });

        ctrl.isCurrentPortfolio = function(portfolioName) {
            return PortfoliosModel.getCurrentPortfolioName === portfolioName;
        }
    })

;