const textArea = document.getElementById("textarea")
const totalChar = document.getElementById("totalchar")
const remainingChar = document.getElementById("remainingchar")

textArea.addEventListener("keyup", () => {
    updateCounter()
})
updateCounter()

function updateCounter(){
    totalChar.innerText = textArea.value.length
    remainingChar.innerText = textArea.getAttribute("maxlength") - textArea.value.length
}
