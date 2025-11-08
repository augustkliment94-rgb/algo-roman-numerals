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
  // console.log(romanNumeraltoArabic[])

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
console.log(toRomanLazy(999))


// for (let i = 1; i <= num; i++);
// console.log(romanNumeralPriorityOrder[0])

// function toRomanLazy(num) {
//   let output = "";

// }
// console.log(toRomanLazy(5))
// function toRoman(num) {
//   return "";
// }

// module.exports = { toRoman, toRomanLazy };
