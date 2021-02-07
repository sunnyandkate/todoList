
let changeMode = document.querySelector('.change-mode');
let header = document.querySelector('.header');
let cont = document.querySelector('.container');
let todoInput = document.querySelector('.todo-input');
let inputField = document.querySelector('#addTodo');
let taskSelect = document.querySelector('.task-select');
let addBtn = document.querySelector('.add-btn');
let dragDrop = document.querySelector('.drag-drop');

//change light and dark mode
changeMode.addEventListener('click', function(){
	
	if(header.classList.contains('light')){
		header.classList.add('dark');
		header.classList.remove('light'); 
		changeMode.src = 'images/icon-sun.svg';
		cont.style.backgroundColor = 'hsl(235, 21%, 11%)';
		todoInput.style.backgroundColor= 'hsl(235, 24%, 19%)';
		inputField.style.backgroundColor= 'hsl(235, 24%, 19%)';
		todoList.classList.add('dark-todo-list');
		todoList.classList.remove('light-todo-list');
		inputField.classList.add('dark-text');
		inputField.classList.remove('light-text');
		taskSelect.classList.add('dark-task-select');
		taskSelect.classList.remove('light-task-select');
		addBtn.style.backgroundColor= 'hsl(235, 24%, 19%)';
		addBtn.style.border= '1px solid hsl(234, 11%, 52%)';
		dragDrop.style.color='hsl(234, 11%, 52%)';
	}else{
		header.classList.add('light');
		header.classList.remove('dark');
		changeMode.src = 'images/icon-moon.svg';
		cont.style.backgroundColor = 'hsl(236, 33%, 92%)';
		todoInput.style.backgroundColor= 'hsl(0, 0%, 98%)';
		inputField.style.backgroundColor= 'hsl(0, 0%, 98%)';
		todoList.style.backgroundColor= 'hsl(0, 0%, 98%)';
		inputField.classList.add('light-text');
		inputField.classList.remove('dark-text');
		taskSelect.classList.add('light-task-select');
		taskSelect.classList.remove('dark-task-select');
		todoList.classList.add('light-todo-list');
		todoList.classList.remove('dark-todo-list');
		addBtn.style.backgroundColor= 'hsl(0, 0%, 98%)';
		addBtn.style.border = '1px solid hsl(233, 11%, 84%)';
		
	}
	//header.classList.toggle('dark');
	this.classList.add('animate__animated', 'animate__fadeIn');
	
});






//grab the text from the input

let todoList =document.querySelector('.todo-list');
addBtn.addEventListener('click', function(){


	let list = document.createElement('LI');
	let userInput = inputField.value;
	list.classList.add('new-item');
	let textnode = document.createTextNode(userInput);
	list.appendChild(textnode);
	todoList.appendChild(list);
	
	list.textContent = userInput;

	list.classList.add('animate__animated', 'animate__fadeIn');
//add the check button
	let checkBtn= document.createElement('BUTTON');
	checkBtn.classList.add('check-btn');
	list.appendChild(checkBtn);
	
	
//click the check button
	checkBtn.addEventListener('click', function(){
	
	
		this.classList.toggle('btn-select');
		list.classList.toggle('list-select');
		list.classList.toggle('list-active');
	
});


//create the delete button

	let deleteBtn = document.createElement('SPAN');
	deleteBtn.classList.add('delete-btn');

	list.appendChild(deleteBtn);

//remove list item

	let delBtnAll= document.querySelectorAll('.delete-btn');
	
	for(let j=0;j<delBtnAll.length;j++){
		
		delBtnAll[j].addEventListener('click', function(){
			
			
			let btnList = this.parentElement;
			btnList.classList.add('animate__animated', 'animate__fadeOut');
			btnList.classList.remove('list-active');
			setTimeout(() => {
			btnList.style.display = "none";
			}, 1000)
		});

	
	}


//show all tasks
let showAll = document.querySelector('.showAll');
showAll.addEventListener('click', function(){
	
	showAll.classList.add('blueColor');
	complete.classList.remove('blueColor');
	active.classList.remove('blueColor');
	
	if(list.textContent == ''){
		
		
		list.style.display='none';
		
	}else{
		
		list.style.display='block';
		
		
	}
	
	
	
	
});
	
	
	
	
//clear all completed tasks

let clearAll = document.querySelector('.clear-all');

clearAll.addEventListener('click', function(){
	
		if(list.classList.contains('list-select')){
			list.style.display='none';
			list.remove();
		}
});

//show only active tasks
let active = document.querySelector('.active');

	active.addEventListener('click', function(){
		
		active.classList.add('blueColor');
		showAll.classList.remove('blueColor');
		complete.classList.remove('blueColor');
		
		
		if(list.classList.contains('list-select')){
		
		
		list.style.display='none';
				
	}else{
		
		list.style.display='block';
		
	}
				
	});


//show only completed tasks
let complete = document.querySelector('.complete');

	complete.addEventListener('click', function(){

	complete.classList.add('blueColor');
	showAll.classList.remove('blueColor');
	active.classList.remove('blueColor');
	
	if(list.classList.contains('list-select') == false){
		
		
		list.style.display='none';		
		
	}else{
		
		list.style.display='block';
		
	}
	});

//set list-active class to all active tasks	
	if(!list.classList.contains('list-select')){
		
		list.classList.add('list-active');
		
	}else if(list.classList.contains('list-select') ){
		
		list.classList.remove('list-active');
		
	}
	
	
//count left items	
let itemsLeft = document.querySelector('.items-left');

itemsLeft.addEventListener('click', function(){
		
		
	
		
let listActive = document.getElementsByClassName("list-active");
let	count = listActive.length;
itemsLeft.textContent= count + " items left";
console.log(typeof count);
});

	
	
});






