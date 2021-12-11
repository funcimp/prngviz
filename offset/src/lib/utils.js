

// rand_seed generates a 32 bit uint as a padded hex eg (07d92112)
export function newSeed() {
    return toPaddedHex((Math.floor(Math.random() * 0xFFFFFFFFFFFFF) >>> 0), 8);
}

export function bitGen(seed) {
    let next = generator(seed)
    return () => toBit(next())
}

export function hexGen8bit(seed) {
    let next = vbg(seed, 8)
    return () => toPaddedHex(next(), 2)
}

export function hexGen16bit(seed) {
    let next = vbg(seed, 16)
    return () => toPaddedHex(next(), 4)
}

export function hexGen24bit(seed) {
    let next = vbg(seed, 24)
    return () => toPaddedHex(next(), 6)
}

export const toBit = n => n & 1
export const fromHex = h => parseInt(h, 16)


// vbg is "variable bit generator" allows you to get a generator that
// returns a specific bit width result. This is limited to anywhere
// between 1 bit and 24 bits.
function vbg(seed, width = 1) {
    let min = 1
    let max = 24
    width = width >>> 0
    if (width < min) { width = 1 }
    if (width > max) { width = 24 }
    let next = bitGen(seed)
    return () => {
        let result = 0
        for (let j = 0; j < width; j++) {
            result = (result << 1) | next()
        }
        return result
    }
}

function generator(seed) {
    let next = xorshift32(fromHex(seed))
    let state = new Uint32Array([next(), next(), next(), next()]);
    return xoshiro128pp(state)
}

function toPaddedHex(n, width) {
    let h = (n >>> 0).toString(16).padStart(width, '0')
    return h.substring(h.length - width)
}

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


let seed = newSeed()
let next = bitGen(seed)
for (let i = 0; i < 100_000_000; i++) {
    next()
}