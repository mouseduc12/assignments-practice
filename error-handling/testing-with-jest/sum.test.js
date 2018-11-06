var sum = require('./app.js')

describe("the sum function", function(){
    it("Should be received numbers as inputs", function(){
        expect(sum("a",true)).toBe("Please provide numbers as inputs")
    })

    test("adds 1 + 2 to euqal 3", function(){
        expect(sum(1,2)).toBe(3)
    })

    it("Should make type of sum equals number", function(){
        expect(typeof sum(13, 3)).toBe("number")
        expect(typeof sum('1', 2)).not.toBe("number");
        expect(typeof sum("12",true)).not.toBe("number");
    })
})