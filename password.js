const lengthEl = document.getElementById("length")
const backEl = document.getElementById("home")
const resultEl = document.getElementById("result")
const generateEl = document.getElementById("generate")
const copyEl = document.getElementById("copy")
const historyEl = document.getElementById("history")

generateEl.addEventListener("click", () => {
	const result = btoa( Math.random() ).substr( 10, lengthEl.value )
	resultEl.value = result
	historyEl.innerHTML += result + "<br>"
})

copyEl.addEventListener("click", () => {
	resultEl.select()
	navigator.clipboard.writeText(resultEl.value)
	copyEl.value = "Copied!"
})

backEl.addEventListener("click", () => {
	window.location.href = "../index.php"
})
