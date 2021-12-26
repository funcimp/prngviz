import { hexGen24bit, fromHex, toBit } from '$lib/utils';

let dataGridCache = {}

export function gridData(seed, length, pixelSize) {
    let key = `${seed}${length}`
    if (key in dataGridCache) {
        return dataGridCache[key]
    }
    let data = new Array(length);
    let xpos = 1;
    let ypos = 1;
    let width = pixelSize;
    let height = pixelSize;

    let next = hexGen24bit(seed);

    const offSet = (i, j, d) => {
        let l = length
        let m = (i + j) % length
        if (m < 0) {
            m = l + m
        }
        return d[m].fill
    };

    for (let row = 0; row < length; row++) {
        data[row] = new Array(length);
        for (let column = 0; column < length; column++) {
            let fill = '';
            if (row == 0) {
                fill = next()
            } else {
                let b = toBit(fromHex(data[0][column].fill));
                if (b === 0) b = -1;
                fill = offSet(b * row, column, data[0])
            }
            data[row][column] = {
                class: 'square',
                x: xpos,
                y: ypos,
                width: width,
                height: height,
                fill: fill
            }
            xpos += width;
        }
        xpos = 1;
        ypos += height;
    }

    dataGridCache[key] = data
    return data;
}