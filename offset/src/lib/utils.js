

export function gen_rand_seed() {
    return Math.floor(Math.random() * 0xFFFFFFFFFFFFF)
}

export function nextRGB(r) {
    let h = r.nextNumber().toString(16)
    return h.substring(h.length - 6,)
}

export function nextBinary(r) {
    let h = r.nextNumber().toString(2)
    return h.substring(h.length - 1,)
}

export function toHex(n) {
    return n.toString(16)
}

export function fromHex(h) {
    return parseInt(h, 16)
}