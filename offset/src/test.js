import { newSeed } from './lib/utils.js';
import { generateItems } from './lib/grid.js'

// let seed = gen_rand_seed()
// let rand = new XoShiRo128PlusPlus(seed)

// for (let i = 0; i < 10000000; i++) {
//     let seed = gen_rand_seed()
//     let bh = bigIntToHex(seed)
//     let h = seed.toString(16)

//     if (parseInt(h, 16) !== parseInt(bh, 16)) {
//         console.log(seed)
//         console.log(bh)
//         console.log(h)
//     }
//     // console.log(nextRGB(rand))
//     // console.log(nextBinary(rand))
// }

let seed = newSeed()
let length = 10;
let [items, itemsList] = generateItems(seed, length);

console.log(itemsList)