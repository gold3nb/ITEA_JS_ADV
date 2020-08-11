document.addEventListener('DOMContentLoaded', () => {

	// Initialization function
	const init = () => {
		const nameInput = document.querySelector('input[name="name"'),
			  passInput = document.querySelector('input[name="password"'),
			  inputs = document.querySelectorAll('input'),
			  innerForm = document.querySelector('.inner-form'),
		      mainForm = document.querySelector('.modal-thre'),
			  closeBtn = document.querySelector('.close'),
			  btn = document.querySelector('.btn'),
			  textGroup1 = document.querySelector('.text-group-1'),
			  textGroup2 = document.querySelector('.text-group-2'),
			  reg = /^[A-Za-zа-щА-ЩЬьЮюЯяЇїІіЄєҐґ0-9]{0,}$/;

		// Closing the form
	    document.addEventListener('click', (e) => {
			if (e.target === document.body) {
				mainForm.style.display = 'none';
			}
		});

		closeBtn.addEventListener('click', () => {
			mainForm.style.display = 'none';
		});

		nameInput.addEventListener('input', () => {
	 		validName();
	 		compare();
		});

		passInput.addEventListener('input', () => {
			validPass();
			compare();
		});

		// Form of sending data
		mainForm.addEventListener('submit', (e) => {
			e.preventDefault();

		 	innerForm.style.display = 'none';
			let div = document.createElement('div');
			let p = document.createElement('p');
			let img = document.createElement('img');
			p.textContent = 'Thank You!';
			p.style.cssText = "font-size: 18px; color: #fff";
			img.src = 'img/ok.png';
			div.style.textAlign = 'center';
			div.append(img);
			div.append(p);
			mainForm.append(div);
			btn.style.backgroundColor = '';
			btn.disabled = true;
			btn.style.cursor = 'auto';
			
			setTimeout(() => {
				div.remove();
				innerForm.style.display = 'block';
			}, 3500);

	 		clearInputs();
		});

		// Results comparison function
		const compare = () => {
			if (validPass() && validName()) {
				btn.style.cssText = 'background-color: #0CB041; cursor: pointer';
				btn.disabled = false;

			} else {
				btn.style.backgroundColor = '';
				btn.style.cursor = 'auto';
				btn.disabled = true;
			}
		}

		const validName = () => {
			let name = nameInput;
			let nameLength = nameInput.value.length;
			let p = document.querySelector('.p-name');

		 	if (nameLength > 0 && reg.test(name.value)) {
		 		name.style.border = '2px solid green';

				if (p) {
					p.remove();
				}

		 		return true;
		 	} else {
		 		name.style.border = '2px solid red';
		 		document.querySelectorAll('.p-name').forEach(elem => elem.remove());

	 			if (nameLength > 0) {
	 				let p = document.createElement('p');
			 		p.classList.add('p-name');
			 		p.textContent = `UserName can’t contain special symbols. Only characters and numbers`
			 		textGroup1.style.padding = '0';
			 		textGroup1.insertAdjacentElement('afterbegin', p);
			 		name.style.border = '2px solid red';
	 			}
		 	}
		}

		const validPass = () => {
			let pass = passInput;
			let passLength = passInput.value.length;

			if (passLength < 6 || passLength > 9 || reg.test(pass.value)) {
		 		document.querySelectorAll('.p-pass').forEach(elem => elem.remove());

	 			if (passLength > 0) {
	 				let p = document.createElement('p');
			 		p.classList.add('p-pass');
			 		p.textContent = (passLength < 6) ? `Password is too short` 
			 					  : (passLength > 9) ? `Password is too long` 
		 						  : `Password should contain at least one special character`
		 			textGroup2.insertAdjacentElement('afterbegin', p);
		 			pass.style.border = '2px solid red';
	 			} else {
	 				pass.style.border = '2px solid red';
	 			}
		 		
		 		
			} else {
				pass.style.border = '2px solid green';
				let p = document.querySelector('.p-pass');

				if (p) {
					p.remove();
				}

 				return true;
			}
		}

		// Input fields clearing function
		const clearInputs = () => {	 		
		 	inputs.forEach(function(input) {
		 		if (input.type !== 'submit') {
		 			input.value = '';
		 			input.style.border = '2px solid transparent'
		 		}
		 	})

	 		btn.style.outline = 'none';
		}
	}

	init();
});