var countCode = require('./index.js')

describe("The countCode function", function(){
    it("Please give me a string!", function(){
        expect(countCode(3)).toBe("Please give me a string!")
        expect(countCode(true)).toBe("Please give me a string!")
    })

    test("should return a number", function(){
        expect(typeof countCode("somestring")).toBe("number");     
    })
    test("Should return correct code count amount", function(){
        expect(countCode("aaacodebb")).toBe(1);
        expect(countCode("codexxcode")).toBe(2);
        expect(countCode("cozexxcope")).toBe(2);
        expect(countCode("PodexxXode")).toBe(2);
    })

})