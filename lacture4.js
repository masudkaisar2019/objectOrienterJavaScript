
// protype in javaScript
// function Person(name,age){
//     this.name = name;
//     this.age = age;

//     this.hello = function(){
//         console.log('Hello , '+ this.name);
        
//     }
// }

// var p1 = new Person("Md Khan", 29);
// var p2 = new Person("Abir Aziz", 25);

// console.log(p1);
// console.log(p2);


//---------add prototype-----]
// function Person(name,age){
//         this.name = name;
//         this.age = age;
//     }
    
//     Person.prototype.hello = function(){
//         console.log('Hello , '+ this.name);
        
//     }
//     Person.prototype.email= "masud08eee@gmail.com";

//     Person.prototype.print = function(){
//         console.log(this.name,this.age); 
//     }
//     var p1 = new Person("Md Khan", 29);
//     var p2 = new Person("Abir Aziz", 25);
    
//     console.log(p1);
//     console.log(p2);
//     console.log(Person.prototype);


    // ==== adding some different way ----

    function Person(name,age){
        this.name = name;
        this.age = age;
    }
    
    // Person.prototype.hello = function(){
    //     console.log('Hello , '+ this.name);
        
    // }
    // Person.prototype.email= "masud08eee@gmail.com";

    // Person.prototype.print = function(){
    //     console.log(this.name,this.age); 
    // }
    Person.prototype = {
        hello : function(){
            console.log( "Hello ," + this.name);   
        },
        print: function(){
            console.log(this.name, this.age);
            
        },
        email: "masud08eee@gmail.com"
    }


    var p1 = new Person("Md Khan", 29);
    var p2 = new Person("Abir Aziz", 25);
    
    console.log(p1);
    console.log(p2);
    console.log(Person.prototype);
