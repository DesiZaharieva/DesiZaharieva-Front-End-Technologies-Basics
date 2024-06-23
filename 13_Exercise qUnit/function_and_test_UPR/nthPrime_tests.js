const {nthPrime} = require("./test_functions.js");

QUnit.module("nthPrime function tests", () => {

    QUnit.test("nth Prime", function(assert) {
        assert.equal(nthPrime(1), 2, "nthPrime")
        
    })
    QUnit.test("5th Prime", function(assert) {
        assert.equal(nthPrime(5), 11, "5thPrime")
        
    })
    QUnit.test("10th Prime ", function(assert) {
        assert.equal(nthPrime(11), 31, "10th prime number is 29");
    });

})