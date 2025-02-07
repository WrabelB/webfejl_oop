const sum = (a,b) => {
    return a + b;
};

console.log(sum(4,5)); // Kiiratjuk a fuggvennyel a ket szam osszeget

const obj = {};

obj.calculate1 = sum;
console.log(obj.calculate1(4,5));

obj.calculate2 = (callBack) => {
    const res = callBack(4,5);
    return res;
};

const res1 = obj.calculate2((a,b) => { // Itt a calculate2 fuggvenyben atadjuk a ket szamot es egy callBack fuggvenyt, összeadás lesz
    return a + b;
});


const res2 = obj.calculate2((a,b) => { // Itt a calculate2 fuggvenyben atadjuk a ket szamot es egy callBack fuggvenyt, szorzas lesz
    return a * b;
});

console.log(res1); 
console.log(res2);

obj.calculate_3 = (a,b, callBack) => {   // A calculate_3 fuggvenyben atadjuk a ket szamot es egy callBack fuggvenyt
    return callBack(a,b);
};

obj.calculate_3(4,5, (a,b) => { return a + b; });   // Itt a harmadik parameterben megadjuk a fuggvenyt, amit a calculate_3 fuggveny hiv meg a ket szamra

const theFunction = () => {
    const sz = 10;
    const res3 = obj.calculate_3(2,7, (a,b) => { return a * sz + b; }); // Itt a harmadik parameterben megadjuk a fuggvenyt, amit a calculate_3 fuggveny hiv meg a ket szamra
    console.log(res3);
}

theFunction(); // Meghivjuk a fuggvenyt

