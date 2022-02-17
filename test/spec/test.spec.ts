import { expect } from 'chai'
import { Calculator } from '../../app/calculator'

let calculator = new Calculator()

describe('Test simple functions', () => {
  it('Function add', () => {
    let result = calculator.addNumbers(5, 6)
    expect(result).to.be.equal(11)
  })
  it('Function multiply', () => {
    let result = calculator.multiplyNumbers(5, 6)
    expect(result).to.be.equal(30)
  })
})
