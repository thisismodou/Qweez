const correctAnswers = ['A', 'B', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
let spanText = document.querySelector('.result span');

console.log(spanText.textContent);

form.addEventListener('submit', e => {
	e.preventDefault();

	let score = 0;
	const answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

	// Check answers
	answers.forEach((answer, index) => {
		if (answer === correctAnswers[index]) {
			score += 25;
			scrollTo(0, 0);
			result.classList.remove('d-none');
			spanText.textContent = `${score}%`;
		}
	});
});
