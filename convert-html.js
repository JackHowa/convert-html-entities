function convertHTML(str) {
  
    // dumbfix 
  var findAmpersands = / & /gi; // need space to prevent overlap 
  var findCarrots = /</gi;
  var findOtherCarrot = />/gi;
  var findQuote = /"/gi;
  var findApostrophe = /'/gi;
  
  // need to store regex as a string 
  // then use it as regex again 

  // start making a dictionary to loop through 
  let dictionary = {}; 
  dictionary[String(findAmpersands)] = ' &amp; ';
  
  console.log(dictionary);
             
  // new RegExp(pattern)
  // via https://stackoverflow.com/questions/1695633/how-to-pass-a-variable-into-regex-in-jquery-javascript
  
  var ampersanded = str.replace(findAmpersands, ' &amp; ');
  var carroted = ampersanded.replace(findCarrots, '&lt;');
  var otherCarroted = carroted.replace(findOtherCarrot, '&gt;')
  var quoted = otherCarroted.replace(findQuote, '&quot;')
  var apostrophed = quoted.replace(findApostrophe, '&apos;');
  return apostrophed;
}

const carrotTest = carrot("Hamburgers < Pizza < Tacos");
console.log(carrotTest);
