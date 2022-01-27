let button = document.querySelectorAll('button')

button.forEach(button => {
		button.addEventListener('click', () => {
	let container = 	button
	.closest('.question-container')
	.querySelector('.answer');
	
		let hr = 	button
	.closest('.question-container')
		.querySelector('hr');
		
		hr.classList.toggle('show-text');
		container.classList.toggle('show-text');
		
		})
})