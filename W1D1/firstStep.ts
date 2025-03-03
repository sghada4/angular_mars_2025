let age: number;
age = 25;
console.log(age);
let username: string ="Alex";
let test : boolean =true;
let users : string[]= ["Joe", "Jane", username];
let bokks : any[]=["username"]
let anyVariable: null =null;

console.log(`username ${username}`);
let tuples : [number, string] = [20, "OK"];
enum Role{
    User,
    Admin,
    Visitor
}
let userRole : Role = Role.Admin;
function sayHello():void{
    console.log("Hello Ninjas")
}
sayHello();
function sumInt(a: number, b:number, c?: number):number{
    return c ? a+b+c : a+b;
}
console.log(sumInt(2,5));
console.log(sumInt(2,5,4));

class Person implements User{
     public username: string;
    protected rib: string;
    constructor(username: string){
        // this.username = username;
    }
    greeting(): string{
        return `Hello, my name ${username}`
    }
}
const person = new Person("Alice");
person.greeting();
// person.username
interface User{
    username : string;
    nickname ?:string
}
const user : User ={username:"Alex"}
let usersList: User[]=[] ;
usersList.push(user);