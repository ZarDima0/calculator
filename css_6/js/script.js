        const number1 = document.getElementById('exampleInputNumber1')
		const number2 = document.getElementById('exampleInputNumber2')
		const plusadd = document.getElementById('minusButton')
		const minus = document.getElementById('plusButton')
		const add  = document.querySelector('p')
		// const row = document.getElementById('blockInline')

		function calcPlus () {
			if (exampleInputNumber1.value = '',exampleInputNumber2.value = '') {
				prompt('Dima pifor')
			}
			let a = exampleInputNumber1.value
			let b = exampleInputNumber2.value 
			let resalt = +a + +b;
			add.innerHTML = resalt;	
			document.getElementById('blockInline').style.display = 'block';

		}
		function calcMinus  () {
			if (exampleInputNumber1.value = '',exampleInputNumber2.value = '')
			alert('Dima pifor')
			let a = exampleInputNumber1.value
			let b = exampleInputNumber2.value 
			let resalt = +a - +b;
			add.innerHTML = resalt;	
			document.getElementById('blockInline').style.display = 'block';
		}
		// function сheckingValue () {
		// 	if (exampleInputNumber1.value = '',exampleInputNumber2.value = '')
		// 	alert('Dima pifor')
		// }

		// addEventListener('alert',сheckingValue)
		plusButton.addEventListener('click',calcPlus)
		minusButton.addEventListener('click',calcMinus)

