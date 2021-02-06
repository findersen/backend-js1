import readlineSync from 'readline-sync'

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
  const wrong = (answer, correct, name) => {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correct}.\nLet\'s try again, ${name}!`)
    return false
  }
  let congrat = true
  for (const v of nums) {
    console.log(v)
    const answer = String(readlineSync.question('Your answer: '))
    const correct = evenOdd(v)
    if (answer === 'yes' || answer === 'no') {
      if (answer === correct) {
        console.log('Correct!')
      } else {
        congrat = wrong(answer, correct, name)
        break
      }
    } else {
      congrat = wrong(answer, correct, name)
      break
    }
  }
  if (congrat) console.log(`Congratulations, ${name}`)
}

function evenOdd (num) {
  if (num % 2) return 'no'
  return 'yes'
}

export { brainHello, brainEven }
