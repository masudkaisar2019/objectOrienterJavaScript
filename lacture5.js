//learning bind , call , and apply

// function printMe(){
//     console.log('Hello '+ this.name); 
// }
// var obj = {
//     name: "Md Masud"
// }
// var obj1 = {
//     name: "Md khan"
// }

//------bind---------
// var binded = printMe.bind(obj)
// var binded1 = printMe.bind(obj1)
// // console.log(printMe.bind(obj));
// binded();
// binded1();

//-----call ------

// printMe.call(obj);
// printMe.call(obj1);


// --- apply --- 

function add(a,b){
    return (a+b)* this.c ;
}

var obj = {
    c : 5
};
var obj1 = {
    c:6
}

//use call method in this function 

var res = add.call(obj,10,24);
res;

// --- in apply we need to use a array to pass argument --
var res1 = add.apply(obj1, [10,5]);
res1;

// using bind in this function 
 var binded = add.bind(obj);
 console.log(binded(12,4));