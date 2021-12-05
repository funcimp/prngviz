import { XoShiRo128PlusPlus } from 'prng-xoshiro';

import { gen_rand_seed, nextRGB, nextBinary } from './lib/utils.js';

let seed = gen_rand_seed()
let rand = new XoShiRo128PlusPlus(seed)

for (let i = 0; i < 10000000; i++) {
    let seed = gen_rand_seed()
    let bh = bigIntToHex(seed)
    let h = seed.toString(16)

    if (parseInt(h, 16) !== parseInt(bh, 16)) {
        console.log(seed)
        console.log(bh)
        console.log(h)
    }
    // console.log(nextRGB(rand))
    // console.log(nextBinary(rand))
}