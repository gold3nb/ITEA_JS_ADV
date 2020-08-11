document.addEventListener('DOMContentLoaded', () => {

	// Initialization function
	const init = () => {
		const nameInput = document.querySelector('input[name="name"]'),
			  passInput = document.querySelector('input[name="password"]'),
			  innerForm = document.querySelector('#formThre'),
			  mainForm = document.querySelector('.modal-thre'),
			  closeBtn = document.querySelector('.close'),
			  container = document.querySelector('.container'),
			  inputs = document.querySelectorAll('input'),
			  textGroup1 = document.querySelector('.text-group-1'),
			  textGroup2 = document.querySelector('.text-group-2'),
			  reg = /^[A-Za-zа-щА-ЩЬьЮюЯяЇїІіЄєҐґ0-9]{0,}$/;
		
		// Close form
		document.addEventListener('click', (e) => {
			if (e.target === document.body) {
				mainForm.style.display = 'none';
			}
		});

		closeBtn.addEventListener('click', () => {
			mainForm.style.display = 'none';
		});

		// Sending form data
		mainForm.addEventListener('submit', (e) => {
			e.preventDefault();

			let value = nameInput.value;
			let a = document.querySelector('.user');
			let b = document.querySelector('.pass');

			a ? a.remove() : ''
			b ? b.remove() : ''

			if ((!reg.test(value) && !isPass())) {
				verifyInputs('user', textGroup1);
				verifyInputs('pass', textGroup2);
			} else if (!reg.test(value)) {
				verifyInputs('user', textGroup1);
			} else if (!isPass()) {
				verifyInputs('pass', textGroup2);
			} else {
				let div = document.createElement('div');
				let p = document.createElement('p');
				let img = document.createElement('img');
				
				innerForm.style.display = 'none';
				p.textContent = 'Thank You!';
				p.style.cssText = "font-size: 18px; color: #fff";
				img.src = 'img/ok.png';
				div.style.textAlign = 'center';
				div.append(img);
				div.append(p);
				mainForm.append(div);

				clearInputs()

				setTimeout(() => {
					div.remove();
					innerForm.style.display = 'block';
				}, 3000);
			}
		});

		// Checking of the correctness input values
		function verifyInputs(id, group) {
			a = document.createElement('p');
			a.classList.add(`${id}`);

			if (a.className === 'user') {
				a.textContent = `UserName can’t contain special symbols. Only characters and numbers`;
			} else if (a.className === 'pass') {
				a.textContent = (passInput.value.length < 6) ? 'Password is too short'
							     : (passInput.value.length > 9) ? 'Password is too long'
							     : `Password should contain at special character`
				group.style.margin = '0';
			}

			group.insertAdjacentElement('afterbegin', a);
		}

		// Input fields clearing function
		function clearInputs() {
			inputs.forEach(input => (input.type === 'submit') ? '' 
			: input.value = '')
		}

		// Checking to correct value
		function isPass() {
			return (passInput.value.length >= 6 && passInput.value.length <= 9 
				&& !reg.test(passInput.value))
		}
	}

	init();
});