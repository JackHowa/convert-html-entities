function convertHTML(str) {
    return ampersand(str);
}

function ampersand(str) {
    const findAmpersands = / & /gi;
    return str.replace(findAmpersands, ' &amp; ');
}

function carrot(str) {
    const findCarrots = /</gi;
    return str.replace(findCarrots, '&​lt;');
}

const ampersandTest = ampersand("Dolce & Gabbana");
console.log(ampersandTest);

const carrotTest = carrot("Hamburgers < Pizza < Tacos");
console.log(carrotTest);
