import { exec } from 'child_process'
import readlineSync from 'readline-sync'

const execRun = (command) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      return
    }
    else if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }
    console.log(`stdout: ${stdout}`)
  })
}

export default () => {
  const commitName = String(readlineSync.question('Commit name: '))

  if (commitName !== 'stop') {
    execRun('git add .')
    execRun(`git commit -m '${commitName}'`)
  }
}