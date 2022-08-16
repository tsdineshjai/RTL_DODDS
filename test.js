/* eslint-disable no-undef */
const {sum, sub} = require('./library')
async function test(title, callback) {
  try {
    await callback()
    console.log(`No issues.. all is well`)
  } catch (error) {
    console.log(title)
    console.log(error)
  }
}

test('adding of two numbers', async () => {
  const result = await sum(5, 5)
  const expected = 9
  expectedFn(result).toBe(expected)
})

test('adding ofsubtracting two numbers', async () => {
  const result = await sub(10, 5)
  const expected = 5
  expectedFn(result).toBe(expected)
})

function expectedFn(calucalatedValue) {
  return {
    toBe(expectedResult) {
      if (calucalatedValue !== expectedResult) {
        throw new Error(`${calucalatedValue} is not equal to ${expectedResult}`)
      }
    },
  }
}
