const isEven = require('./9.testing.js')

test("Primer test con Jest", () =>{
    expect(isEven(8)).toBe(true)
})
