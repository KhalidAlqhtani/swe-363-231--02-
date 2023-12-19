const emitter = require('./eventEmitter.js');
function loginSimuolater(userId) {
  const delay = Math.random() * 2 + 0.2; 
  setTimeout(() => {
    const clock = new Date().toLocaleTimeString();
    console.log(`${clock}: USER_${userId} logged in`);
    emitter.emit('userLoggedIn', `USER_${userId}`);
    logoutSimuolater(userId);
  }, delay * 1000);
}
function logoutSimuolater(userId) {
  const delay = Math.random() * 2 + 0.2; 
  setTimeout(() => {
    const clock = new Date().toLocaleTimeString();
    console.log(`${clock}: USER_${userId} logged out`);
    emitter.emit('userLoggedOut', `USER_${userId}`);
    loginSimuolater(userId);
  }, delay * 1000);
}
emitter.on('userLoggedIn', (user) => {
  console.log(`Event: ${user} logged in`);
});
emitter.on('userLoggedOut', (user) => {
  console.log(`Event: ${user} logged out`);
});
for (let i = 1; i <= 7; i++) {
  loginSimuolater(i);
}
console.log('Ctrl+C to quit.');