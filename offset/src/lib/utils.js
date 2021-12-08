

// rand_seed generates a 32 bit uint as a padded hex eg (07d92112)
export function rand_seed() {
    return (Math.floor(Math.random() * 0xFFFFFFFFFFFFF) >>> 0).toString(16).padStart(8, '0');
}

export function generator(seed) {
    let next = xorshift32(fromHex(seed))
    let state = new Uint32Array([next(), next(), next(), next()]);
    return xoshiro128pp(state)
}

export const toBinary = n => n & 1
export const fromHex = h => parseInt(h, 16)
export const toRGB = n => (n >>> 0).toString(16).padStart(6, '0').substring(2)

function xorshift32(a) {
    return () => {
        a ^= a << 13; a ^= a >>> 17; a ^= a << 5;
        return Math.floor((a >>> 0) / 4294967296 * 0xFFFFFFFFF) >>> 0;
    }
}

// this algorithm is based on this c code:
// https://prng.di.unimi.it/xoshiro128plusplus.c

const rotl = (x, k) => (x << k) | (x >> (32 - k))

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


let seed = rand_seed()
let next = generator(seed)
for (let i = 0; i < 1_000_000; i++) {
    let rgb = 0
    for (let j = 0; j < 24; j++) {
        let n = next()
        rgb = (rgb << 1) | toBinary(next())
    }
    console.log(rgb)
}