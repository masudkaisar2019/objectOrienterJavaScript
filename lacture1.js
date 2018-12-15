//javascript basic object.

// var obj = {};
// var obj1 = new Object;
// console.log(obj);
// console.log(obj1);



var book ={
    name: "Functiona JavaScript",
    author:"Micbael Fogus ",
    publisher:'0\'Reillty',
    page: 250,

    print: function(){
        console.log(this.name, this.author)   
    }
}
// console.log(book);
// book.print()
console.log('Book Name : '+ book.name); // dot . notation
console.log('Author Name : '+ book['author']); // braket notation

console.log('Publisher Year: '+ book.publishYear);
book.publishYear = 2010;
console.log('Publish Year: '+ book.publishYear);
book['price'] = 30;
console.log(book.price);
 
console.log(book);
// ------To check object property we can use props -------
for(var props in book){
    // console.log(props);
    console.log(props + " = "+ book[props]);
}

