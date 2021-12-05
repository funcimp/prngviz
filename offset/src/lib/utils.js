

export function gen_rand_seed() {
    return BigInt(Math.floor(Math.random() * 0xFFFFFFFFFFFFF))
}

export function nextRGB(r) {
    let h = r.nextBigInt().toString(16)
    return h.substring(h.length - 6,)
}

export function nextBinary(r) {
    let h = r.nextBigInt().toString(2)
    return h.substring(h.length - 1,)
}


// based on the code from
// https://coolaj86.com/articles/convert-decimal-to-hex-with-js-bigints/
export function bigIntToHex(n) {
    n = BigInt(n);
    let pos = true;
    if (n < 0) {
        pos = false;
        n = bitnot(n);
    }
    let hex = n.toString(16);
    if (hex.length % 2) { hex = '0' + hex; }
    if (pos && (0x80 & parseInt(hex.slice(0, 2), 16))) { hex = '00' + hex; }
    return hex;
}

export function bitnot(n) {
    n = -n;
    let bin = (n).toString(2);
    let prefix = '';
    while (bin.length % 8) { bin = '0' + bin; }
    if ('1' === bin[0] && -1 !== bin.slice(1).indexOf('1')) { prefix = '11111111'; }
    bin = bin.split('').map(i => '0' === i ? '1' : '0').join('');
    return BigInt('0b' + prefix + bin) + BigInt(1);
}

// based on the code from
// https://coolaj86.com/articles/convert-hex-to-decimal-with-js-bigints/

export function hexToBigInt(h) {
    if (h.length % 2) { h = '0' + h; }
    const highbyte = parseInt(h.slice(0, 2), 16);
    let n = BigInt('0x' + h);
    if (0x80 & highbyte) {
        n = BigInt('0b' + n.toString(2).split('').map(i => '0' === i ? 1 : 0).join('')) + BigInt(1);
        n = -n;
    }
    return n;
}