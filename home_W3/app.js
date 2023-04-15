// hw3

// dz1 reverseString

// 1 вариант
function reverseString(str) {
    var newString = ""
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }
    return newString
}
console.log(reverseString("Salam"))

// 2 вариант
function reverseString(str) {
  if (str === "")
    return ""
  else
    return reverseString(str.substr(1)) + str.charAt(0)
}
console.log(reverseString("Salam"))

// тернарный вариант 2-го
function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0)
}
console.log(reverseString("Salam"))


// dz 2 capitalizeString
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalizeString("ЕВГЕНИЙ"))
console.log(capitalizeString("иВАНОВ"))
console.log(capitalizeString("aLeKs"))


// dz 3 depersonalize
function depersonalize(fullName) {
  var name1 = fullName.split(" ")
  var depersonalizedName = name1.map(name2 => {
    if (name2.length > 2) {
      var str1 = name2[0]
      var str2 = name2[name2.length - 1]
      return `${str1}${"_".repeat(name2.length - 2)}${str2}`
    } else {
      return name2
    }
  })
  var depersonalized = depersonalizedName.join(" ")
  return depersonalized
}

var fullName1 = "Киселев Евгений Дмитриевич"

console.log(depersonalize(fullName1))
