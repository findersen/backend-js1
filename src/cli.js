import readlineSync from 'readline-sync'

export default () => {
  console.log('Welcome to the Brain Games!\nMay I have your name?')
  const name = readlineSync.question('Your answer: ')
  console.log(`Hello, ${name}!`)
}
