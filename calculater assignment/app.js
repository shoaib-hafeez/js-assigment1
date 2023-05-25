let disp = document.getElementById('display')
function buttonClick(btn) {
	disp.value += btn
}
function clearDisplay() {
	disp.value = ""
}
function back() {
	disp.value = disp.value.slice(0, disp.value.length - 1)
}
function total() {
	disp.value = eval(disp.value)
}