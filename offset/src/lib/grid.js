import { newSeed, hexGen24bit, fromHex, toBit } from '$lib/utils';


export function generateItems(seed, length) {
    let next = hexGen24bit(seed);
    let items = [];
    let itemsList = [];
    for (let i = 0; i < length; i++) {
        items.push(next());
    }
    const offSet = (i, l) => l.slice(i, l.length).concat(l.slice(0, i));
    for (let i = 0; i < length; i++) {
        // itemsList.push(items)
        let b = toBit(fromHex(items[i]));
        if (b === 0) b = -1;
        itemsList.push(offSet(b * i, items));
    }
    return [items, itemsList]
}

export function makeRow(items, size) {
    return items.map(item => {
        return `
<div class="column" style="padding: 0; flex:0;">
    <div 
        width="3"
        style="padding: 0; 
        background-color:#${item}; 
        width:${size}; 
        height:${size};"
    > </div>    
</div>
`
    }).join("")
}

export function makeGrid(items, itemsList, size) {
    return items.map((_, i) => {
        return `
<div class="row">
        ${makeRow(itemsList[i], size)}
</div>
`}).join("")
}




// {#each itemsList[i] as item}
// <div class="column" style="padding: 0; flex:0;">
//     <div
//         width="3"
//         style="padding: 0; background-color:#{item}; width:{size}; height:{size};"
//     />
// </div>
// {/each}


export function gridData(seed) {
    var data = new Array();
    var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
    var ypos = 1;
    var width = 2;
    var height = 2;
    var length = 600;
    let [items, itemsList] = generateItems(seed, length);


    // iterate for rows 
    for (var row = 0; row < length; row++) {
        data.push(new Array());

        // iterate for cells/columns inside rows
        for (var column = 0; column < length; column++) {
            data[row].push({
                x: xpos,
                y: ypos,
                width: width,
                height: height,
                fill: itemsList[row][column]
            })
            // increment the x position. I.e. move it over by 50 (width variable)
            xpos += width;
        }
        // reset the x position after a row is complete
        xpos = 1;
        // increment the y position for the next row. Move it down 50 (height variable)
        ypos += height;
    }
    return data;
}