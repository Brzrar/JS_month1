var decreaseButton = document.getElementById("decrease")
var increaseButton = document.getElementById("increase")
var resetButton = document.getElementById("reset")
var numElement = document.getElementById("num")

var num = 0

decreaseButton.addEventListener("click", () => {
    num--
    updateNum()
})

increaseButton.addEventListener("click", () => {
  num++
  updateNum()
})

resetButton.addEventListener("click", () => {
  num = 0
  updateNum()
})
function updateNum() {
  numElement.textContent = num

  if (num > 0) {
    numElement.classList.remove("grey")
    numElement.classList.add("green")
  } else if (num < 0) {
    numElement.classList.remove("grey")
    numElement.classList.add("red")
  } else {
    numElement.classList.remove("green", "red")
    numElement.classList.add("grey")
  }
}
