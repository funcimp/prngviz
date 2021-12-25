import { hexGen24bit, fromHex, toBit } from '$lib/utils';

let generateItemsCache = {}
let dataGridCache = {}

async function asyncGenerateItems(seed, length) {
    return generateItems(seed, length)
}

export function generateItems(seed, length) {
    let key = `${seed}${length}`
    if (key in generateItemsCache) {
        return generateItemsCache[key]
    }

    let next = hexGen24bit(seed);
    let items = [];
    let itemsList = new Array(length);
    for (let i = 0; i < length; i++) {
        items.push(next());
    }
    const offSet = (i, l) => {
        let a = new Array(length)
        for (let j = 0; j < length; j++) {
            let m = (i + j) % length
            if (m < 0) {
                m = length + m
            }
            a[j] = l[m]
        }
        return a
    };
    for (let i = 0; i < length; i++) {
        let b = toBit(fromHex(items[i]));
        if (b === 0) b = -1;
        itemsList[i] = offSet(b * i, items);
    }
    generateItemsCache[key] = [items, itemsList]
    return [items, itemsList]
}

export function gridData(seed, length) {
    let key = `${seed}${length}`
    if (key in dataGridCache) {
        console.log("using cache for", key)
        return dataGridCache[key]
    }
    let data = new Array(length);
    let xpos = 1;
    let ypos = 1;
    let width = 1;
    let height = 1;
    let [_, itemsList] = generateItems(seed, length);

    for (var row = 0; row < length; row++) {
        data[row] = new Array(length);
        for (var column = 0; column < length; column++) {
            data[row][column] = {
                x: xpos,
                y: ypos,
                width: width,
                height: height,
                fill: itemsList[row][column]
            }
            xpos += width;
        }
        xpos = 1;
        ypos += height;
    }

    dataGridCache[key] = data
    return data;
}