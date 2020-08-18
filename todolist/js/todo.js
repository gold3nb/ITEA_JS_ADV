document.addEventListener('DOMContentLoaded', () => {

	const init = () => {
		const form = document.querySelector('#form'),
			  success = document.querySelector('.success'),
			  complete = document.querySelector('.complete'),
			  danger = document.querySelector('.danger'),
			  input = document.querySelector('input'),
			  listGroup = document.querySelector('.list-group'),
			  listGroupComplete = document.querySelector('.list-group-complete'),
			  emptyLi = document.querySelector('.list-group-item-empty'),
			  notification = document.querySelector('.notification'),
			  emptyNotification = document.querySelector('.empty-notification'),
			  closeTask = document.querySelectorAll('.i-close');

		// localStorage
		let arrTasks = { key: [] },
			listEmpty = { key: [] },
			completeGroup = { key: []},
			completeEmpty = { key: []},
			pos = 0;
		
		if (localStorage.getItem('keyList') != undefined && localStorage.getItem('firstEmpty') != undefined) {
			arrTasks.key = JSON.parse(localStorage.getItem('keyList'));
			listEmpty.key = JSON.parse(localStorage.getItem('firstEmpty'));
			listGroup.innerHTML = arrTasks.key.join('');
			listGroup.insertAdjacentHTML('afterbegin', listEmpty.key.join(''));
		}

		if (localStorage.getItem('complete') != undefined) {
			completeGroup.key = JSON.parse(localStorage.getItem('complete'));
			listGroupComplete.insertAdjacentHTML('afterbegin', completeGroup.key.join(''));
		}

		if (!localStorage.getItem('secondEmpty')) {
			completeEmpty.key.push(emptyLi.outerHTML);
			localStorage.setItem('secondEmpty', JSON.stringify(completeEmpty.key));
		}

		if (localStorage.getItem('secondEmpty') != undefined) {
			completeEmpty.key = JSON.parse(localStorage.getItem('secondEmpty'));
			listGroupComplete.insertAdjacentHTML('afterbegin', completeEmpty.key.join(''));
		}

		// Show notification
		function showNotificationMessage(classItem, text) {
			emptyNotification.classList.add(classItem);
			emptyNotification.textContent = text;
			emptyNotification.style.opacity = '1';
			emptyNotification.addEventListener('transitionend', function() {
				emptyNotification.style.opacity = '0';
				emptyNotification.classList.remove(classItem);
			});
		}

		// Remove Task
		function removeTask(arr, e) {
			let elem = e.target.closest('.list-group-item').innerHTML;
			arr.key.forEach((item, index) => arr.key[index].includes(elem) ? pos = index : 0)
			e.target.closest('.list-group-item').remove();
			arr.key.splice(pos, 1);
		}

		// Update tasks array and set to localStorage
		function updateTasks(arr, list, key) {
			arr.key = [];
			list.querySelectorAll('.list-group-item').forEach(item => arr.key.push(item.outerHTML));
			localStorage.setItem(`${key}`, JSON.stringify(arr.key));
		}

		// Check empty li item
		function checkEmptyItem(list, arr, key) {
			let empty = list.querySelector('.list-group-item-empty');
			if (list.children.length > 0) {
				if (empty) {
					empty.remove();
					arr.key = [];
					localStorage.setItem(`${key}`, JSON.stringify(arr.key));
				}
			} else {
				list.insertAdjacentHTML('afterbegin', emptyLi.outerHTML);
				arr.key.push(emptyLi.outerHTML);
				localStorage.setItem(`${key}`, JSON.stringify(arr.key));
			}
		}

		form.addEventListener('submit', (e) => {
			e.preventDefault();

			let createTask = `<li class="list-group-item"><div class="group-span"><div class="group-1">
				<i class="far fa-circle left-circle" data-action="ready"></i><span id="edit" class="task-title">${input.value}</span>
				</div><div class="group-2"><i class="far fa-edit"></i><i class="fa fa-trash-alt i-close" data-action="delete task"></i>
				</div></div></li>`;
			listGroup.insertAdjacentHTML('afterbegin', createTask);

			checkEmptyItem(listGroup, listEmpty, 'firstEmpty');
			updateTasks(arrTasks, listGroup, 'keyList');
			showNotificationMessage('success', 'Задачу успішно добавлено!');
			input.value = '';
		});

		listGroupComplete.addEventListener('click', (e) => {
			if (e.target.classList.contains('i-close')) {
				removeTask(completeGroup, e);
				updateTasks(completeGroup, listGroupComplete, 'complete');
				checkEmptyItem(listGroupComplete, completeEmpty, 'secondEmpty');
				showNotificationMessage('danger', 'Задачу успішно видалено!');
			}
		});

		listGroup.addEventListener('click', (e) => {
			const range = document.createRange(),
					sel = window.getSelection();

			let groupItems = e.target.closest('.list-group-item'),
				taskEdits = document.querySelectorAll('#edit');

			// Remove Task (li in arr === e.target li)
			if (e.target.classList.contains('i-close')) {
				removeTask(arrTasks, e);
				checkEmptyItem(listGroup, listEmpty, 'firstEmpty');
				showNotificationMessage('danger', 'Задачу успішно видалено!');
			}

			// Complete Task
			if (e.target.classList.contains('fa-circle')) {
				e.target.classList.remove('fa-circle');
				e.target.classList.add('fa-check-circle');
				e.target.nextElementSibling.classList.add('task-title-done');
				groupItems.querySelector('.fa-edit').remove();
				groupItems.querySelector('.task-title').removeAttribute('contenteditable');
				listGroupComplete.insertAdjacentElement('afterbegin', groupItems);
				showNotificationMessage('complete', 'Задачу успішно виконано!');
				updateTasks(completeGroup, listGroupComplete, 'complete');
				checkEmptyItem(listGroup, listEmpty, 'firstEmpty');
				checkEmptyItem(listGroupComplete, completeEmpty, 'secondEmpty');
			}

			// Edit Task
			if (e.target.classList.contains('fa-edit')) {
				groupItems.querySelector('.task-title').setAttribute('contenteditable', 'true');
				groupItems.querySelector('.task-title').focus();

				range.selectNodeContents(groupItems.querySelector('.task-title'));
			    range.collapse(false);
			    
			    sel.removeAllRanges();
			    sel.addRange(range);

			    groupItems.querySelector('.task-title').onkeydown = function(e) {
			    	if (e.key === 'Enter') {
			    		this.blur();
			    		groupItems.querySelector('.task-title').setAttribute('contenteditable', 'false');		
			    		updateTasks(arrTasks, listGroup, 'keyList');
			    	}
			    }

			    groupItems.querySelector('.task-title').onmouseout = function(e) {
		    		groupItems.querySelector('.task-title').setAttribute('contenteditable', 'false');
		    	}
			}

			updateTasks(arrTasks, listGroup, 'keyList');
		})
	}

	init();
});