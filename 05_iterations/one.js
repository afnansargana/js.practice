//== for loop ==
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best number");
    }
    console.log(element);
    
}//output=0,1,2,3,4,5 is the best number,5,6,7,8,9,10

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and Inner loop value ${i}`);
        console.log(i + '*' + j + ' = ' + i*j);//is s table bna g 1 s 10
    
    }
    
}

let myArray = ["Afnan", "Ali", "Umer"];

console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];

    console.log(element);
}

//break(stop kr do) and continue
for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`Detetcted 5`);
        break
    }
    console.log(`Value of i is ${index}`);
    
}

//continue= Current round chhoro, agla round chalao.
for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`Detetcted 5`);
        continue
    } 
    console.log(`Value of i is ${index}`);
    
}