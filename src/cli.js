import readlineSync from 'readline-sync'
import _ from 'lodash'

const brainHello = () => {
  console.log('Welcome to the Brain Games!\nMay I have your name?')
  const name = readlineSync.question('Your answer: ')
  console.log(`Hello, ${name}!`)
  return name
}

const brainEven = () => {
  const name = brainHello()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  const nums = [15, 6, 7]
  let congrat = true

  for (const v of nums) {
    console.log(v)

    const answer = userAnsver()
    const correct = evenOdd(v)

    if (answer === 'yes' || answer === 'no') {
      if (answer === correct) {
        console.log('Correct!')
      } else {
        congrat = wrongAnsver(answer, correct, name)
        break
      }
    } else {
      congrat = wrongAnsver(answer, correct, name)
      break
    }
  }
  if (congrat) console.log(`Congratulations, ${name}`)
}

const brainCalc = () => {
  const name = brainHello()
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

    const correct = arithmetic(num1, num2, operator)
    const answer = Number(userAnsver())

    if (answer === correct) {
      console.log('Correct!')
    } else {
      congrat = wrongAnsver(answer, correct, name)
      break
    }
  }
  if (congrat) console.log(`Congratulations, ${name}`)
}

function evenOdd (num) {
  if (num % 2) return 'no'
  return 'yes'
}

function arithmetic (num1, num2, operator) {
  if (operator === '+') return num1 + num2
  else if (operator === '-') return num1 - num2
  else if (operator === '*') return num1 * num2
  return false
}

function wrongAnsver (answer, correct, name) {
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correct}.\nLet's try again, ${name}!`)
  return false
}

function userAnsver () {
  const answer = String(readlineSync.question('Your answer: '))
  return answer
}

export { brainHello, brainEven, brainCalc }
