// Number One

let j = 1;

while (j < 21) {
    if (j % 2 === 1) {
        console.log(j);
    }
    j++;
}

// or

for (let i = 1; i < 21; ++i) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

// Number Two

let k = 99;

while (k > 0) {
    if (k % 3 === 0) {
        console.log(k);
    }
    k--;
}

// or 

for (let m = 99; m > 0; --m) {
    if (m % 3 === 0) {
        console.log(m);
    }
}

// Number Three

let n = 4;

while (n > -4) {
    console.log(n);
    n -= 1.5;
}

// or

for (let p = 4; p > -4; --p) {
    console.log(p);
    p -= -0.5;
}

// Number Four

let q = 1;
let sumQ = 0;

while (q < 101) {
    sumQ += q;
    q++;
}

// or

let sumP = 0;

for (let p = 1; p < 101; ++p) {
    sumP += p;
}

// Number Five

let s = 1;
let prodS = 1;

while (s < 13) {
    prodS *= s;
    s++;
}

// or

let prodR = 1;

for (let r = 1; r < 13; ++r) {
    prodR *= r;
}