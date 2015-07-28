angular.module('portfolios.portfolio.edit', [])

    .config(function($stateProvider) {
        $stateProvider.state('stockTracker.portfolios.portfolio.edit', {
            url: '/edit',
            views: {
                'currentPortfolio@stockTracker.portfolios': {
                    controller: 'EditCtrl as editCtrl',
                    templateUrl: 'app/portfolios/portfolio/edit/edit.tmpl.html'
                }
            }
        })
    })

    .controller('EditCtrl', function($state, $stateParams, PortfoliosModel) {
        var ctrl = this;

        PortfoliosModel.setCurrentPortfolio($stateParams.portfolioName).then(function(){
            ctrl.portfolio = PortfoliosModel.getCurrentPortfolio();
        });

        function returnToPortfolio () {
            $state.go('stockTracker.portfolios.portfolio', {'portfolioName': ctrl.portfolio.name});
        }

        ctrl.updatePortfolio = function() {
            //model is already updated due to binding.
            //But could initiate save to backend here.
            //PortfoliosModel.updatePortfolio();
        };

        ctrl.done = function() {
            returnToPortfolio();
        }
    })
;
