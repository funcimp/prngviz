import { XoShiRo256PlusPlus } from 'prng-xoshiro';


function rand_seed() {
    const randBigInt = () => BigInt(Math.floor(Math.random() * 0xFFFFFFFFFFFFF))
    return Array.apply(null, Array(4)).map(() => randBigInt())
}

// based on the code from
// https://coolaj86.com/articles/convert-decimal-to-hex-with-js-bigints/
function bigIntToHex(bn) {
    bn = BigInt(bn);

    var pos = true;
    if (bn < 0) {
        pos = false;
        bn = bitnot(bn);
    }

    var hex = bn.toString(16);
    if (hex.length % 2) { hex = '0' + hex; }

    if (pos && (0x80 & parseInt(hex.slice(0, 2), 16))) {
        hex = '00' + hex;
    }

    return hex;
}

function bitnot(bn) {
    bn = -bn;
    var bin = (bn).toString(2)
    var prefix = '';
    while (bin.length % 8) { bin = '0' + bin; }
    if ('1' === bin[0] && -1 !== bin.slice(1).indexOf('1')) {
        prefix = '11111111';
    }
    bin = bin.split('').map(i => '0' === i ? '1' : '0').join('');
    return BigInt('0b' + prefix + bin) + BigInt(1);
}

// based on the code from
// https://coolaj86.com/articles/convert-hex-to-decimal-with-js-bigints/

function hexToBigInt(hex) {
    if (hex.length % 2) {
        hex = '0' + hex;
    }

    var highbyte = parseInt(hex.slice(0, 2), 16);
    var bn = BigInt('0x' + hex);

    if (0x80 & highbyte) {
        bn = BigInt('0b' + bn.toString(2).split('').map(i => '0' === i ? 1 : 0).join('')) + BigInt(1);
        bn = -bn;
    }

    return bn;
}



let rand = new XoShiRo256PlusPlus(...rand_seed())
let a = rand.nextBigInt()
console.log(bigIntToHex(a), bigIntToHex(a).length)
console.log(a)
console.log(hexToBigInt(bigIntToHex(a)))