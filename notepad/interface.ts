// note - you can specify required fields for a class
interface Person {
    first: string;
    last: string;
    [key: string]: any // it says that you can add something to class, not only declare first and last name
}

const person: Person = {
    first: 'Melon',
    last: 'Coosc'
}

const person2: Person = {
    first: 'Bigus',
    last: 'Dickus',
    harambleDead: true // you can add this cuz this shit from above with [key: string]: any
}