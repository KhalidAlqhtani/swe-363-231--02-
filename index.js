const { exec } = require('child_process');

// Run the "start" command from package.json
function runStartCommand() {
  exec('npm start', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing "npm start": ${error}`);
      return;
    }
    console.log(`"npm start" executed successfully`);
    console.log(stdout);
  });
}

// Call the function to run the "start" command
runStartCommand();