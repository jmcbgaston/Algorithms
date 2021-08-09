function isCurrency(strAmount) {
  const currency = new Set([
    '$', '€', '¥'
  ]);
  const numbers = new Set([
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
  ])

  // str can only begin with:
  const validBeginning = new Set([
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    '$', '€', '¥', '(', '-', '.'
  ])
  // '-' can only be followed with:
  const validNegative = new Set([
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    '$', '€', '¥', '(', '.'
  ])
  // '(' can only be followed with:
  const validParentheses = new Set([
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    '$', '€', '¥', '.'
  ])
  // currency symbol can only be followed with:
  const validCurrency = new Set([
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    '.'
  ])
  
  // base cases:
    // str is length 1 and isn't a number
    // str does not begin with a valid character
    // str starts with '-' and is followed by something invalid
    // str starts with '(' and is followed by something invalid
    // str starts with '(' and does not end with ')'
    // str starts with a currency and is followed by something invalid
  if (strAmount.length === 1 && !Number.isInteger(+strAmount[0])
    || !validBeginning.has(strAmount[0]) 
    || (strAmount[0] === '-' && !validNegative.has(strAmount[1]))
    || (strAmount[0] === '(' && !validParentheses.has(strAmount[1]))
    || (strAmount[0] === '(' && strAmount[strAmount.length - 1] !== ')')
    || (currency.has(strAmount[0]) && !validCurrency.has(strAmount[1]))
    || (strAmount[strAmount.length - 1] === '.')
    || numbers.has(strAmount[0])) 
  {
    return 0;
  }

  let i = 0;
  let isYen = strAmount[0] === '¥';
  if (currency.has(strAmount[0] || strAmount[0] === '-' || strAmount[0] === '(')) {
    i = 1;
  }
  
  let hasDecimal = false;
  let numsSinceLastComma = 0;
  let strHasCommas = false;
  let inDecimalTerritory = false;

  for (i; i < strAmount.length; i++) {
    let curr = strAmount[i];

    // case: '.'
    if (curr === '.') {

      // if we've already seen a decimal, return 0
      if (hasDecimal || isYen) {
        return 0;
      // otherwise, flip the bool
      } else {
        hasDecimal = true;
        inDecimalTerritory = true;
      }
    // case: 'found a number'
    } else if (numbers.has(curr)) {
      // case: string has commas
      if (strHasCommas && !inDecimalTerritory) {
        // case: can't have 4 consecutive numbers when in whole number territory
        if (numsSinceLastComma < 3) {
          numsSinceLastComma++;
        } else {
          return 0;
        }
      } else {
        numsSinceLastComma++
      }
    } else if (curr === ',') {
      
      // if we already have commas and we encounter an invalid comma placement
      if (strHasCommas && numsSinceLastComma > 3) {
        // console.log(1)
        return 0;
        
        // if this is the first comma we've seen it has to be after 1-3 numbers
      } else if (!strHasCommas && numsSinceLastComma >= 1 && numsSinceLastComma <= 3 ) {
        // console.log(2)
        strHasCommas = true
        numsSinceLastComma = 0;
      } else if (!strHasCommas && numsSinceLastComma > 3) {
        return 0;
      } else {
        strHasCommas = true;
      }
    } else if (curr === '¥') {
      isYen = true;
    }
  }

  if (!inDecimalTerritory && strHasCommas && numsSinceLastComma < 3) return 0;
  return 1
}

console.log(isCurrency('$450')) // 1
console.log(isCurrency('-€23')) // 1
console.log(isCurrency('(¥2400)')) // 1
console.log(isCurrency('$4,500.00')) // 1
console.log(isCurrency('€0.25')) // 1
console.log(isCurrency('cat')) // 0
console.log(isCurrency('£25')) // 0
console.log(isCurrency('$45,0')) // 0
console.log(isCurrency('¥1200,000')) // 0