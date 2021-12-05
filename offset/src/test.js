import { XoShiRo256PlusPlus } from 'prng-xoshiro';

import { gen_rand_seed, bigIntToHex, hexToBigInt, nextRGB, nextBinary } from './lib/utils.js';

let seed = gen_rand_seed()
console.log(seed, bigIntToHex(seed))

let rand = new XoShiRo256PlusPlus(seed)

for (let i = 0; i < 10000; i++) {
    // console.log(nextRGB(rand))
    console.log(nextBinary(rand))
}