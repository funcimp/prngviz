import { hexGen24bit, fromHex, toBit } from '$lib/utils';

let cache = {}

async function asyncGenerateItems(seed, length) {
    return generateItems(seed, length)
}

export function generateItems(seed, length) {
    let key = `${seed}${length}`
    if (key in cache) {
        console.log('from cache', key)
        return cache[key]
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
        // itemsList.push(items)
        let b = toBit(fromHex(items[i]));
        if (b === 0) b = -1;
        itemsList[i] = offSet(b * i, items);
        // itemsList[i] = offSet(i, items);
    }
    cache[key] = [items, itemsList]

    return [items, itemsList]
}

export function gridData(seed, length = 600) {
    var data = new Array(length);
    let xpos = 1;
    let ypos = 1;
    var width = 1;
    var height = 1;
    let [items, itemsList] = generateItems(seed, length);

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
    return data;
}