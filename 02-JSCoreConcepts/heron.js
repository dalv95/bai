// boki trójkąta
a = 3;
b = 4;
c = 5;
// h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

heronMethod = (a, b, c) => {
    let p = (a + b + c) / 2
    let result = Math.sqrt(p * (p - a) * (p - b) * (p - c))
    return `Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi ${result}`
};

console.log(heronMethod(a, b, c));
