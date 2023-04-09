// hw 2

// dz1) Конвертер чисел

// 1 - вариант (if else)

var numb = Number(prompt("Введите число от 1 до 10!"))

if (numb === 1) {
    alert("I")
} else if (numb === 2) {
    alert("II")
} else if (numb === 3) {
    alert("III")
} else if (numb === 4) {
    alert("IV")
} else if (numb === 5) {
    alert("V")
} else if (numb === 6) {
    alert("VI")
} else if (numb === 7) {
    alert("VII")
} else if (numb === 8) {
    alert("VIII")
} else if (numb === 9) {
    alert("IX")
} else {
    alert("Введите корректно числа от 1 до 10!")
}

// 2 - вариант (switch case)

switch (numb) {
    case 1:
        alert("I")
        break
    case 2:
        alert("II")
        break
    case 3:
        alert("III")
        break
    case 4:
        alert("IV")
        break
    case 5:
        alert("V")
        break
    case 6:
        alert("VI")
        break
    case 7:
        alert("VII")
        break
    case 8:
        alert("VIII")
        break
    case 9:
        alert("IX")
        break
    default:
        alert("Введите корректно числа от 1 до 10!")
}


// dz2) fizzBuzz

for (i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else{
        console.log (i)
    }
}


// dz3) Таблица умножения от 2 до 10

var numb = parseInt(Number(prompt("Введите число от 2 до 10!")))

for (var i = 1; i <= 10; i++) {
    if (numb > 1 && numb <= 10) {
        console.log(numb + " * " + i + " = " + (numb * i))
    } else {
        alert("Введите корректно числа от 2 до 10!")
        break
    }
}


// dz4) Планеты солнечной системы

// 1 - вариант (рутина)

var convert = Number(prompt("Введите число от 1 до 9!"))

if (convert > 0 && convert === 1) {
    alert('Меркурий')
} else if (convert > 1 && convert === 2) {
    alert("Венера")
} else if (convert > 2 && convert === 3) {
    alert("Земля")
} else if (convert > 3 && convert === 4) {
    alert("Марс")
} else if (convert > 4 && convert === 5) {
    alert("Юпитер")
} else if (convert > 5 && convert === 6) {
    alert("Сатурн")
} else if (convert > 6 && convert === 7) {
    alert("Уран")
} else if (convert > 7 && convert === 8) {
    alert("Нептун")
} else if (convert > 8 && convert === 9) {
    alert("Плутон")
} else {
    alert("Введите корректно числа от 1 до 8 ! ")
}

// 2 - вариант (более проще, также работает с обычным равенством)

if (convert === 1) {
    alert('Меркурий')
} else if (convert === 2) {
    alert("Венера")
} else if (convert === 3) {
    alert("Земля")
} else if (convert === 4) {
    alert("Марс")
} else if (convert === 5) {
    alert("Юпитер")
} else if (convert === 6) {
    alert("Сатурн")
} else if (convert === 7) {
    alert("Уран")
} else if (convert === 8) {
    alert("Нептун")
} else if (convert === 9) {
    alert("Плутон")
} else {
    alert("Введите корректно числа от 1 до 8 ! ")
}


// 3 - вариант (switch case)

switch (convert){
    case 1 :
        alert("Меркурий");
        break;
    case 2 :
        alert("Венера");
        break;
    case 3 :
        alert("Земля");
        break;
    case 4 :
        alert("Марс");
        break;
    case 5 :
        alert("Юпитер");
        break;
    case 6 :
        alert("Сатурн");
        break;
    case 7 :
        alert("Уран");
        break;
    case 8 :
        alert("Нептун");
        break;
    case 9 :
        alert("Плутон");
        break;
    default:
        alert("Введите корректно числа от 1 до 9!")
}