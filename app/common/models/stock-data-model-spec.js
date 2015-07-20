describe('stockTracker.models.stockData', function () {
    var MarketDataModel,
        $httpBackend;

    beforeEach(module('stockTracker'));

    beforeEach(inject(function ($injector, _MarketDataModel_) {
        MarketDataModel = _MarketDataModel_;
        $httpBackend = $injector.get('$httpBackend');
        jasmine.getJSONFixtures().fixturesPath = 'base/data';
    }));


    describe('MarketDataModel', function () {
        beforeEach(function() {
            $httpBackend.resetExpectations();
        });

        it('should return quotes', function () {
                //$httpBackend.when('GET', 'http://dev.markitondemand.com/Api/v2/Quote/json?symbol=aapl').respond(200, {Name: 'Apple Inc'});
                $httpBackend.expect('GET', 'http://dev.markitondemand.com/Api/v2/Quote/json?symbol=aapl')
                    .respond(getJSONFixture('quotes.json'));

                var quote = MarketDataModel.getQuoteBySymbol('aapl');

                $httpBackend.flush();

                quote.then(function(result) {
                    expect(result.Name).toBe('Apple Inc');
                });
            }
        );

        //TODO
        xit('should return symbols', function() {
            $httpBackend.expect('GET', 'http://dev.markitondemand.com/Api/v2/Lookup/json') //todo query string
                .respond(200, {Name: 'Apple Inc'});

            var symbols = MarketDataModel.getSymbols('aapl');

            $httpBackend.flush();

            symbols.then(function(result) {
                expect (result.contains('AAPL')).toBe(true);
            })
        })
    });
});