const fv1 = (a, b) => a + b; // Az fv1 függvény összeadja a két paramétert

const fv2 = (a,b,cb) => { // Az fv2 függvény meghívja a cb függvényt a háom paraméterrel
    v1 = cb(a,2);
    v2 = cb(b,4);
    osszeg = cb(v1,v2);
    return osszeg;
}

console.log(fv1(5,7)); // 12
res1 = fv2(5,7,(a,b) => a+b); // 18
console.log(res1);

res2 = fv2(5,7,fv1); // 18
console.log(res2); 

const fv3 = (operator) => { // Az fv3 függvény visszaad egy függvényt a paraméter alapján 
    if (operator === '-') {
        return (a,b) => a-b;
    }

    if(operator === '*2') {
        const multi = 2;
        return (a,b) => {
            return (a+b)*multi;
        }
    }
}

const fv4 = fv3('-'); // Az fv4 függvény az fv3 függvény visszatérési értékével egyenlő
console.log(fv4(5,7)); // -2

const res3 = fv2(5,7,fv3('-')); // 0
console.log(res3);

const res4 = fv2(5,7,fv3('*2')); // 72
console.log(res4);
