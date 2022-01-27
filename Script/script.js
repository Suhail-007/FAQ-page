//using selectors inside the element

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
})




//traversing the dom

/*let button = document.querySelectorAll('button')

button.forEach(button => {
		button.addEventListener('click', (e) => {
	let container = 	button
	.closest('.question-container')
	.querySelector('.answer');
	
		let hr = 	button
		.closest('.question-container')
		.querySelector('hr');
		
		hr.classList.toggle('show-text');
		container.classList.toggle('show-text');
		})
})*/
