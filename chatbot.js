const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const responses = {
  'hello': 'Hi, How may I help you?',
  'how are you': 'Great.',
  'what is your name': 'dumb AI.',
  'exit': 'see you next time',
  'quit': 'see you next time',
  'what is the best game': 'GTA6'
};

function inputHandler(input) {
  input = input.toLowerCase();
  if (responses[input]) {
    console.log(responses[input]);
  } else {
    console.log("I can't understand that. Please try again.");
  }
  promptUser();
}


function promptUser() {
  rl.question('You: ', (response) => {
    if (response.toLowerCase() === 'exit' || response.toLowerCase() === 'quit') {
      console.log(responses['exit']);
      rl.close();
    } else {
       inputHandler(response);
    }
  });
}
console.log('Chatbot: Hello! How can I help you? (Type "exit" or "quit" to terminate the chatbot)');
promptUser();