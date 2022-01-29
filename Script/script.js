//using selectors inside the element
/*
const questions = document.querySelectorAll('.question-container');

questions.forEach(question => {
		const btn = question.querySelector('button');

//we are checking if the user click on the same question button 	on which we are looping over if not remove the class	
		btn.addEventListener('click', ()=> {
				questions.forEach(item => {
						if (item != question) {
								item.classList.remove('show-text');
						}
				})
				question.classList.toggle('show-text');
		})
})*/




//traversing the dom

let buttons = document.querySelectorAll('button')

buttons.forEach(button => {
		button.addEventListener('click', (e) => {
		
		let questions = button.closest('.question-container');
		questions.classList.toggle('show-text');
		})
})
