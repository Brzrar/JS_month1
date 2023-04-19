// hw 1

// 1) Приветствие
var name = prompt("Имя:")
var surname = prompt("Фамилия")
alert("Здравствуйте, " + name + " " + surname + "!")

// 2) Числа, >, <, =

var num1 = prompt("Введите первое число: ")
var num2 = prompt("Введите второе число: ")

if (num1 > num2) {
    console.log(num1 + " Больше " + num2)
} else if (num1 < num2) {
    console.log(num1 + " Меньше " + num2)
} else {
    console.log(num1 + " равно " + num2)
}

// 3) Светофор

var color = prompt("Введите цвет светофора: (красный (red), желтый (yellow), зеленый (green))").trim().toLowerCase()

if (color === "красный" || color === "red") {
    console.log("Стоп (stop)")
} else if (color === "желтый" || color === "yellow") {
    console.log("Приготовься (Get ready)")
} else if (color === "зеленый" || color === "green") {
    console.log("Вперед (go)")
} else {
    alert("Введите корректно цвет светофора: (красный (red), желтый (yellow), зеленый (green))")
}
