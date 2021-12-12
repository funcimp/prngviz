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
        itemsList.push(items)
        // let b = toBit(fromHex(items[i]));
        // if (b === 0) b = -1;
        // itemsList.push(offSet(b * i, items));
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