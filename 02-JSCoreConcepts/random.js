Numbers = [];

const arrayFil = (first, last) => {
    for(let i = first; i <= last; i++){
        Numbers.push(i);
    }
}

const arrayPrint = (arrayToPrint) => {
    arrayToPrint.forEach(element => {
        console.log(element);
    });
}

arrayFil(5,14);
arrayPrint(Numbers);
