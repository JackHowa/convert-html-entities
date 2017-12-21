function convertHTML(str) {
  // dumbfix 
  var findAmpersands = / & /gi; // need space to prevent overlap 
  var findCarrots = /</gi;
  var findOtherCarrot = />/gi;
  var findQuote = /"/gi;
  var findApostrophe = /'/gi;
  
  
  
  var ampersanded = str.replace(findAmpersands, ' &amp; ');
  var carroted = ampersanded.replace(findCarrots, '&lt;');
  var otherCarroted = carroted.replace(findOtherCarrot, '&gt;')
  var quoted = otherCarroted.replace(findQuote, '&quot;')
  var apostrophed = quoted.replace(findApostrophe, '&apos;');
  return apostrophed;
}

const carrotTest = carrot("Hamburgers < Pizza < Tacos");
console.log(carrotTest);
