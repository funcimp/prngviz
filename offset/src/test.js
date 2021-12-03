import { XoShiRo256PlusPlus } from 'prng-xoshiro';


let rand = new XoShiRo256PlusPlus(111111111111n, 5555555555555n, 666666666666n, 77777777777n)

console.log(rand.nextBigInt())
console.log(rand.nextBigInt())
console.log(rand.nextBigInt())
console.log(rand.nextBigInt())