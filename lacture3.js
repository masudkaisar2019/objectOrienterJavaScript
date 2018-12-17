// this key 

// var obj = {
//     name: "Honey Ban",

//     print: function(){
//         console.log(this); 
//         console.log("Hello ," + this.name);   
//     }
// }
// function myFunc(){

//     function inner(){
//     console.log(this);
//     }
//     inner()
// }
// myFunc()

// obj.print()

// var person = {
//     name : "Md Khan",
//     print: function (){
        
//         console.log(this);
//         console.log('Hello, '+ this.name);    
    
//     }
// }
// person.print()

// // var myName = person.name;
// // myName
 
// var myPrint = function(){
    
//     console.log(this);
//     console.log(this.name);
// }


// var myPrint = person.print.bind(person);
// console.log(myPrint);

// myPrint()



//--- add a number   bind a obj in the function .

// function add(num){
//     return this.value + num ;
// }
// var obj = {
//     value: 30
// }

// var binded = add.bind(obj);
// var result = binded(70);
// result


//-------

var person = {
    name : " Honey Ban ",

    print: function(){
        // var name = this.name;  

        setTimeout(function(){
            console.log(' Hello ' + this.name); 
        }.bind(this),2000);
    }
}
person.print()

var person = {
    name : "Md Khan",

    print : function(){
        setTimeout(function(){
            console.log('Hello ' + this.name);
            
        }.bind(this), 2000)
    }
}
person.print();