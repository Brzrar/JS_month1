// hw5

// #1
const maskCard = (cardNumber, maskSymbol = "X") => {
  const visibleDigits = 6
  const lastVisibleDigits = 4
  const maskedDigits = cardNumber.length - visibleDigits - lastVisibleDigits

  const maskedSubstring = maskSymbol.repeat(maskedDigits)
  const visibleSubstring = cardNumber.slice(0, visibleDigits) + maskedSubstring + cardNumber.slice(-lastVisibleDigits)

  return visibleSubstring
}

console.log(maskCard("4815154823541789"))
console.log(maskCard("4815154823541789", "#"))

// #2

const padStart = (str, len, replaceChar = ' ') => {
  if (str.length >= len) {
    return str
  }

  const padLength = len - str.length
  const padString = replaceChar.repeat(padLength)

  return padString + str
}

console.log(padStart("7", 3, "0"))
console.log(padStart("7", 5))
console.log(padStart("qwerty", 3, "X"))

// #3

function mean() {
  if (arguments.length === 0) {
    return 0
  }

  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }

  return sum / arguments.length
}

console.log(mean(1, 4, 5, 8))
console.log(mean())
console.log(mean(1, 1, 1, 1, 1))


const mean2 = (...args) => {
  if (args.length === 0) {
    return 0
  }

  const sum = args.reduce((acc, val) => acc + val, 0)

  return sum / args.length
}

console.log(mean2(1, 4, 5, 8))
console.log(mean2())
console.log(mean2(8, 2, 9, 3, 5))

// #4

function sumAsText() {
  let sum = 0
  let text = ""
  if (arguments.length > 0) {
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
      if (i === arguments.length - 1) {
        text += arguments[i] + " = " + sum
      } else {
        text += arguments[i] + " + "
      }
    }
  }
  return text
}

console.log(sumAsText(22, 1, 4, 99, 5, 4,))


const sumAsText2 = (...args) => {
  let sum = 0
  let text = ""
  if (args.length > 0) {
    for (let i = 0; i < args.length; i++) {
      sum += args[i]
      if (i === args.length - 1) {
        text += args[i] + " = " + sum
      } else {
        text += args[i] + " + "
      }
    }
  }
  return text
}

console.log(sumAsText2(1, 2, 3, 66, 4, 3, 2))
