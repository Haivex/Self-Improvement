//Naivy way
// const crypto = require('crypto');
// const hash = crypto.createHash('md5');
// hash.update('password1');
// conosle.log(hash.digest('hex'));

// const shaHash = crypto.createHash('sha256');
// hash.update('password1');
// conosle.log(hash.digest('hex'));


//Recomendation Hash Algorithms ( From Best )
//Argon2 - the best
//PBKDF2 - good for company
//scrypt - hard to break, require a lot of hardware resources
//bcrypt

//Right way
const crypto = require('crypto');
const password = 'password1';

//Bytes are buffer so convert to hex
const salt = crypto.randomBytes(256).to('hex');
//Arguments:
//password and salt
//iterations
//bytes back from the function
//hash function
const hashedPwd = crypto.pbkdf2Sync(password, salt, 100_000, 512, 'sha512');
console.log(hashedPwd.toString('hex'));