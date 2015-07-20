angular.module('stockTracker',[
    'ui.router',
    'watchlist',
    'portfolios'])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('stockTracker', {
            url: '',
            abstract: true
        });

        $urlRouterProvider.otherwise('/');
    })

    .controller('MainCtrl', function () {

    })

    // This code makes state accessible so it can be bound in the html to find current state
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    })

;

//angular.bootstrap(document.getElementById('stockTracker'),['stockTracker']);