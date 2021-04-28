//tsc app.ts --watch   kompiluje jeden plik
//tsc --init  a pozniej tsc albo tsc --watch  kompiluje caly projekt
//lib pozwala zdecydowac z czym programujemy kod np browser, node czy gotowa biblioteka
//source map pozwala debugowac ts
//declaration gdy tworzmy biblioteki
//rootdir i outdir gdzie i skad tworzyc pliki
//iplicity musza bbyc typy parametrow w funkcji
//strict null checks sprawdza czy element moze byc null
//bind zwraca uwage czy dobrze binduje
//this to samo czy dobrze this

//nounused sprawdz czy zmienna, parametr jest uzyty
//implicitreturns sprawdza czy return zwraca czy nie zwraca
const button = document.querySelector('button')!;
button.addEventListener('click', () => {
    console.log('click');
})

let sd = new Map()
let sd = new Set()

interface Person {
    firstName: string;
    lastName?: string;
}

function createPerson(person: Person) {
    console.log(person.firstName);
}

class Employee {
    public employeeName: string; //public private proteced

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log('Hello, I am '+this.employeeName);
    }
}

let empl1 = new Employee('Vas');
console.log(empl1.employeeName)
empl1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName)
    }
    delegateWork() {
        console.log('Manager delegating...')
    }
}

let m1 = new Manager('Ben');
m1.greet()