const EventEmitter = require('events');

const myEventEmitter = new EventEmitter();

// myEventEmitter.on('wroteCode', () => {
//     console.log('Somebody wrote some code!');
// })

// myEventEmitter.on('wroteCode', () => {
//     console.log('Busy building Node apps!');
// })

// myEventEmitter.emit('wroteCode'); 


myEventEmitter.on('wroteCode', (language) => {
    console.log(`Somebody wrote some ${language} code!`);
})

myEventEmitter.emit('wroteCode', 'JavaScript'); 