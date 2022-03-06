const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');

count = 0;

btns.forEach((btn) => {
	btn.addEventListener('click', function (e) {
		const btnClass = e.currentTarget.classList;
		if (btnClass.contains('increase')) {
			count++;
		} else if (btnClass.contains('decrease')) {
			count--;
		} else {
			count = 0;
		}
		if (count > 0) {
			value.style.color = 'green';
		}
		if (count < 0) {
			value.style.color = 'red';
		}
		if (count === 0) {
			value.style.color = 'black';
		}
		value.textContent = count;
	});
});
