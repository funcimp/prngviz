// this algorithm is based on this c code:
// https://prng.di.unimi.it/xoshiro128plusplus.c

function rotl(x, k) {
    return (x << k) | (x >> (32 - k));
}

function xoshiro128pp(s) {
    return () => {
        const result = rotl(s[0] + s[3], 7) + s[0];
        const t = s[1] << 9;
        s[2] ^= s[0];
        s[3] ^= s[1];
        s[1] ^= s[2];
        s[0] ^= s[3];
        s[2] ^= t;
        s[3] = rotl(s[3], 11);
        return result & 0x7FFFFFFF;
    }
}

function xorshift32(a) {
    return () => {
        a ^= a << 13; a ^= a >>> 17; a ^= a << 5;
        return Math.floor((a >>> 0) / 4294967296 * 0xFFFFFFFFF) >>> 0;
    }
}

// console.log(x)
let next = xorshift32(0xcf0805a5)
let y = next()
console.log(y, y.toString(2).length,)
// console.log(next())
// console.log(next())
// console.log(next())

// uint64_t next() {
// 	uint64_t z = (x += 0x9e3779b97f4a7c15);
// 	z = (z ^ (z >> 30)) * 0xbf58476d1ce4e5b9;
// 	z = (z ^ (z >> 27)) * 0x94d049bb133111eb;
// 	return z ^ (z >> 31);
// }
// rand_seed generates 
export function rand_seed() {
    return (Math.floor(Math.random() * 0xFFFFFFFFFFFFF) >>> 0).toString(16).padStart(8, '0');
}

console.log(rand_seed())


let state = new Uint32Array([1512351235, 23529358023587, 52035925, 25825825]);


// for (let i = 0; i < 1; i++) {
//     let n = xoshiro128pp(state)
//     console.log(n & 0x7FFFFFFF)
// }