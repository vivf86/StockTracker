describe('stockTracker.models.portfolios', function() {
    var PortfoliosModel;
    beforeEach(module('stockTracker'));
    beforeEach(inject(function(_PortfoliosModel_){
        PortfoliosModel = _PortfoliosModel_;
    }));

    describe('PortfoliosModel', function() {
        it('should return blank', function() {
            expect(PortfoliosModel.getCurrentPortfolioName()).toBe('');
        })
    })
});