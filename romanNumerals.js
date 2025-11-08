function toRomanLazy(num) {
  let output = "";

  const romanNumeraltoArabic = {
    I : 1, 
    V : 5, 
    X : 10, 
    L : 50, 
    C : 100, 
    D : 500, 
    M : 1000
  };
  
  const romanNumeralPriorityOrder = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

  for (let i = 0; i < romanNumeralPriorityOrder.length; i++){

    const roman = romanNumeralPriorityOrder[i];

    const arabic = romanNumeraltoArabic[roman];

    const count = Math.floor(num / arabic);

    output += roman.repeat(count);

    num -= count * arabic;

    if (num === 0) {
      break;
    }
  }
  return output;
}
console.log(toRomanLazy(944))


function toRoman(num) {
  let output = "";

  const romanNumeraltoArabic = {
    I : 1, 
    IV : 4,
    V : 5, 
    IX : 9,
    X : 10,
    XL : 40, 
    L : 50, 
    XC : 90,
    C : 100,
    CD : 400, 
    D : 500, 
    CM : 900,
    M : 1000
  };
  // console.log(romanNumeraltoArabic[])

  const romanNumeralPriorityOrder = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (let i = 0; i < romanNumeralPriorityOrder.length; i++){

    const roman = romanNumeralPriorityOrder[i];

    const arabic = romanNumeraltoArabic[roman];

    const count = Math.floor(num / arabic);

    output += roman.repeat(count);

    num -= count * arabic;

    if (num === 0) {
      break;
    }
  }
  return output;
}
console.log(toRoman(944))

module.exports = { toRoman, toRomanLazy };
