const number1 = document.getElementById('exampleInputNumber1')
const number2 = document.getElementById('exampleInputNumber2')
const plusadd = document.getElementById('minusButton')
const minus = document.getElementById('plusButton')
const multiplyAdd = document.getElementById('multiplyButton')
const divisionAdd = document.getElementById('division')
const checkButton =  document.getElementsByTagName('button')
const add = document.querySelector('p')




// switch theme
if (!localStorage.theme)
	localStorage.theme = 'lite'
document.body.className = localStorage.theme


document.getElementById('toggleTheme').onclick = () => {
	document.body.classList.toggle('dark')
	if (document.body.className == 'dark') {
		toggleTheme.innerHTML = 'Включить светлую тему';
	}
	if (document.body.className == '')
		toggleTheme.innerHTML = 'Включить черную тему';


	localStorage.theme = document.body.className || 'lite';
}

// checking input
function check() {
	if (number1.value === '') {
		$('#exampleModal').modal('show')

	}
	if (number2.value === '') {
		$('#exampleModal').modal('show')
		blockInline.style.display = 'none'
	}
}

// card display
function changeDisplay() {
	blockInline.style.display = 'block';
}
function checkInput() {
	const num1 = +number1.value
	const num2 = +number2.value
	return [num1,num2]
}

// addition
function calcPlus() {
	const num = checkInput()
	let result = num[0] + num[1]
	add.innerHTML = result
	changeDisplay()	
}

// subtraction
function calcMinus() {
	const num = checkInput()
	let result = num[0] - num[1];
	add.innerHTML = result
	changeDisplay()
}
function division() {
	const num = checkInput()
	let result = num[0] / num[1];
	add.innerHTML = result
	changeDisplay()
}
function multiply() {
	const num = checkInput()
	let result = num[0] * num[1];
	add.innerHTML = result
	changeDisplay()
}


divisionAdd.addEventListener('click',division)
multiplyButton.addEventListener('click',multiply)
plusButton.addEventListener('click', calcPlus)
minusButton.addEventListener('click', calcMinus)
plusButton.addEventListener('click', check)
minusButton.addEventListener('click', check)
divisionAdd.addEventListener('click', check)
multiplyButton.addEventListener('click', check)