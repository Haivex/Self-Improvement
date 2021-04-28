//Enum {new, old}

enum Role {ADMIN, READ_ONLY_USER, AUTHOR};

// const ADMIN = 1;
// const READ_ONLY_USER = 0;

const person = {
    name: 'Haivex',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

if(person.role === Role.ADMIN) {
    console.log('is admin')
}