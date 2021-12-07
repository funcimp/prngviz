
// this algorithm is based on this c code:
// https://prng.di.unimi.it/xoshiro128plusplus.c

function rotl(x, k) {
    return (x << k) | (x >> (32 - k));
}

function xoshiro128pp(s) {
    const result = rotl(s[0] + s[3], 7) + s[0];
    const t = s[1] << 9;
    s[2] ^= s[0];
    s[3] ^= s[1];
    s[1] ^= s[2];
    s[0] ^= s[3];
    s[2] ^= t;
    s[3] = rotl(s[3], 11);
    return result;
}


let state = new Uint32Array([3595898852, 4290026455, 1751400157, 3565898852]);

export function nextRGB(n) {
    let h = n.toString(16)
    return h.substring(h.length - 6,)
}

for (let i = 0; i < 1_000_000; i++) {
    let n = xoshiro128pp(state)
    // console.log(n)
    console.log(parseInt(nextRGB(n), 16))
}