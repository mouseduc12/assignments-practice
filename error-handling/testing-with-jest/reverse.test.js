var reverse = require('./reverse.js')

test("This should be a reversed arr", function(){
    expect(reverse(["h","e","l","l","o"])).toEqual(["o","l","l","e","h"])
})

