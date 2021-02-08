import _ from 'lodash'
import readlineSync from 'readline-sync'
import aux from '../src/auxiliary.js'

const brainEven = () => {
  const name = aux.brainHello()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  const nums = [15, 6, 7]
  let congrat = true
  for (const v of nums) {
    console.log(v)

    const answer = aux.userAnsver()
    const correct = aux.evenOdd(v)

    if (answer === 'yes' || answer === 'no') {
      if (answer === correct) {
        console.log('Correct!')
      } else {
        congrat = aux.wrongAnsver(answer, correct, name)
        break
      }
    } else {
      congrat = aux.wrongAnsver(answer, correct, name)
      break
    }
  }
  if (congrat) console.log(`Congratulations, ${name}`)
}

const brainCalc = () => {
  const name = aux.brainHello()
  let gameLength = readlineSync.question('How many questions are you willing to answer?: ')
  if (gameLength < 2) {
    console.log('The answer is wrong, you have to answer at least 3 questions. I believe in you! :)')
    gameLength = 3
  }
  console.log('What is the result of the expression?')

  const operators = ['+', '-', '*']
  const totalOperators = operators.length - 1
  let congrat = true
  for (let i = 0; i < gameLength; i += 1) {
    const operator = operators[_.random(0, totalOperators)]
    const num1 = _.random(0, 100)
    const num2 = _.random(0, 50)

    console.log(`Question: ${num1} ${operator} ${num2}`)

    const correct = aux.arithmetic(num1, num2, operator)
    const answer = Number(aux.userAnsver())

    if (answer === correct) {
      console.log('Correct!')
    } else {
      congrat = aux.wrongAnsver(answer, correct, name)
      break
    }
  }
  if (congrat) console.log(`Congratulations, ${name}`)
}

const brainGcd = () => {
  const name = aux.brainHello()
  let gameLength = readlineSync.question('How many questions are you willing to answer?: ')
  if (gameLength < 2) {
    console.log('The answer is wrong, you have to answer at least 3 questions. I believe in you! :)')
    gameLength = 3
  }
  console.log('Find the greatest common divisor of given numbers.')

  let congrat = true
  for (let i = 0; i < gameLength; i += 1) {
    const num1 = _.random(0, 50)
    const num2 = _.random(0, 50)

    console.log(`Question: ${num1} ${num2}`)

    const correct = aux.gcd(num1, num2)
    const answer = Number(aux.userAnsver())

    if (answer === correct) {
      console.log('Correct!')
    } else {
      congrat = aux.wrongAnsver(answer, correct, name)
      break
    }
  }
  if (congrat) console.log(`Congratulations, ${name}`)
}

export { brainEven, brainCalc, brainGcd }
