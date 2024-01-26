const accum = (str) => {
    return str.split('').map((char, index) => {
        return char.toUpperCase() + char.toLowerCase().repeat(index);
    }).join('-');
}