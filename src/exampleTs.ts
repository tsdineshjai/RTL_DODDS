function add(a: number, b: number) {
  return a + b
}

const result = add(1, 2)

const object = {
  firstName: 'D',
  middleName: 'M',
  lastName: 'n',
}

const {firstName, middleName} = object

console.log(firstName, middleName, result)
