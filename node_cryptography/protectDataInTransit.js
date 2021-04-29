//Two keys
//One for Encrypt
//Second for Decrypt
//HMAC
//Digital signature

//keys Diffie-Hellman
// const crypto = require('crypto');
// //First person
// const sally = crypto.createDiffieHellman(2048);
// const sallyKeys = sally.generateKeys();
// //Second person use sally prime and generator
// const bob = crypto.createDiffieHellman(sally.getPrime(), sally.getGenerator())
// const bobKey = bob.generateKeys();
// //Share keys between people
// const sallySecret = sally.computeSecret(bobKey);
// const bobSecret = bob.computeSecret(sallyKeys);

console.log(bobSecret.toString('hex'));
console.log(sallySecret.toString('hex'));

//HMAC
const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'a secret')
hmac.update('some data to hash');
//create assigned hash
console.log(hmac.digest('hex'));


//HTTPS Handshake
//1.Client send cipher
//2. Server send public certificate
//3. Client verify certificate
//4. Send pre key to create private key
//5. Public keys created and can communicate
//Keys are sended asymetric and rest data symetric
