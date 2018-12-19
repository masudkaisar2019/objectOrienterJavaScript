//learning bind , call , and apply

function printMe(){
    console.log('Hello '+ this.name); 
}
var obj = {
    name: "Md Masud"
}
var obj1 = {
    name: "Md khan"
}
// var binded = printMe.bind(obj)
// var binded1 = printMe.bind(obj1)
// // console.log(printMe.bind(obj));
// binded();
// binded1();

//-----call ------

printMe.call(obj);
printMe.call(obj1);

