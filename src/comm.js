import { exec } from 'child_process'
import readlineSync from 'readline-sync'

export default () => {
  const commitName = String(readlineSync.question('Commit name: '))

  if (commitName !== 'stop') {
    exec(`git add .`, (error, stdout, stderr) => {
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
    exec(`git commit -m '${commitName}'`, (error, stdout, stderr) => {
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
}
