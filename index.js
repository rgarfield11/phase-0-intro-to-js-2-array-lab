// Write your solution here!


const cats = ['Milo', 'Otis', 'Garfield'];

const destructivelyAppendCat = name => cats.push(name);

const destructivelyPrependCat = name => cats.unshift(name);

const destructivelyRemoveLastCat = name => cats.pop(name);

const destructivelyRemoveFirstCat = name => cats.shift(name);

const appendCat = (name) =>{
    const copyCats = [...cats];
    copyCats.push(name);
    return copyCats;
}

const prependCat = (name) =>{
    const copyCats = [...cats];
    copyCats.unshift(name);
    return copyCats;
}

function removeLastCat() {
    const copyCats = [...cats];
    copyCats.pop();
    return copyCats;
}

function removeFirstCat() {
    const copyCats = [...cats];
    copyCats.shift();
    return copyCats;
}



