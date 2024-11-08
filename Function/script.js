
//functions

//global scope

var x =1;
let y =2;
const z =3;

// local scope
{
    let y = 4;
    console.log(y);
}

function myFunction() {
    const z = 5;
    console.log(z);
}

console.log(y);

myFunction();


