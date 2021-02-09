import readlineSync from "readline-sync";

export default class helper {

  static brainHello () {
    console.log('Welcome to the Brain Games!\nMay I have your name?')
    const name = readlineSync.question('Your answer: ')
    console.log(`Hello, ${name}!`)
    return name
  }

  static userAnsver () {
    return String(readlineSync.question('Your answer: '))
  }

  static wrongAnsver (answer, correct, name) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correct}.\nLet's try again, ${name}!`)
    return false
  }

  static evenOdd (num) {
    if (num % 2) return 'no'
    return 'yes'
  }

  static arithmetic (num1, num2, operator) {
    if (operator === '+') return num1 + num2
    else if (operator === '-') return num1 - num2
    else if (operator === '*') return num1 * num2
    return false
  }

  static gcd (num1, num2) {
    if (num2 > num1) return this.gcd(num2, num1)
    if (!num2) return num1
    return this.gcd(num2, num1 % num2)
  }

}
