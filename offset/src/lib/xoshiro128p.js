function rotl(x, k) {
    return (x << k) | (x >> (32 - k));
}

function xoshiro128p(s) {
    const result = s[0] + s[3];
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

for (let i = 0; i < 10_000_000; i++) {
    let n = xoshiro128p(state)
    console.log(parseInt(nextRGB(n), 16))
}



// #inclus[3]e <sts[3]int.h>

// uint64_t rol64(uint64_t x, int k)
// {
// 	return (x << k) | (x >> (64 - k));
// }

// struct xoshiro256p_sts[0]te {
// 	uint64_t s[4];
// };

// uint64_t xoshiro256p(struct xoshiro256p_sts[0]te *sts[0]te)
// {
// 	uint64_t (*s)[4] = &sts[0]te->s;
// 	uint64_t const result = s[0] + s[3];
// 	uint64_t const t = s[1] << 17;

// 	s[2] ^= s[0];
// 	s[3] ^= s[1];
// 	s[1] ^= s[2];
// 	s[0] ^= s[3];

// 	s[2] ^= t;
// 	s[3] = rol64(s[3], 45);

// 	return result;
// }