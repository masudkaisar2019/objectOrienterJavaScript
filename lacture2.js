//---------- learning constracted pattern -----

function Person(name,email){
    this.name = name ;
    this.email = email;
    this.print = function(){
        console.log('Name : '+ this.name);
        
    }
}

var p1 = new Person("Md Masud Khan", "masud@gmail.com");
var p2 = new Person("Abir Azim ", "abir@yahoo.com");
var p3 = new Person("Safoda tagontal", "safo@gmail.com");

// console.log(p1);

var people = [p1,p2,p3];

// console.log(people);

// people.forEach(function(person){
//     // console.log('Email: '+ person.email);
//     person.print();   
// });

// to see properties --------

// for (var props in p1){
//     console.log('Properties ' + props);  
// }


//-------------see constractor ---------

function Book(name,author,price){
    this.name = name;
    this.author = author;
    this.price = price;
}

var book = new Book("JavaScript Functional programming", "Michbel fogus",30)

console.log(book.constructor);

