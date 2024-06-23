const { assert } = require("qunit");
const { isEven } = require("./test_functions.js");

QUnit.module("isEven function tests", () => {
    QUnit.test("Ëven numbers", function(assert) {
        assert.ok(isEven(2), "even number passed");
        assert.ok(isEven(10), "even number passed");
        assert.ok(isEven(100), "even number passed");
    })
    QUnit.test("Odd numbers", function(assert) {
       assert.notOk(isEven(3), "odd number passed");
       assert.notOk(isEven(35), "odd number passed");
       assert.notOk(isEven(103), "odd number passed");
    })

    QUnit.test("zero as input", function(assert) {
        assert.ok(isEven(0), "0 number passed");
    })
    QUnit.test("negative numbers", function(assert) {
        assert.ok(isEven(-2), "negative number passed");
        assert.ok(isEven(-10), "negative number passed");
        assert.ok(isEven(-100), "negative number passed")
    })
})



