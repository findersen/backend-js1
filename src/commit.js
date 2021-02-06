import { exec } from 'child_process'
import readlineSync from 'readline-sync'

export default () => {
  const commitName = readlineSync.question('Commit name: ')

  exec(`git commit -m ${commitName}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }
    console.log(`stdout: ${stdout}`)
  })
}
