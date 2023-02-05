function newF(param) {
    const words = param.split(' ');
    console.log(words);
    let longest = '';
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(newF('Have you done react before javascript'))