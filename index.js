let i=0;
let task_arr =[]
function saveTask() {
	let user_task = document.querySelector("#userTask");
	let user_task_value = user_task.value;
	if(user_task_value===""){
		alert("Empty List cannot be stored");
	}
	else if(task_arr.includes(user_task_value)){
		alert("Task Already Exist")
		user_task.value = ""
	}

	else{
		let save_task = document.querySelector("#saveTask");
		i+=1
		save_task.innerHTML+=`
			<div class="element delete${i}">
			<li id=task${i}>${user_task_value}</li>
			<div class="align-right">
			<button onclick=done(task${i}) id=${user_task_value}" >✔</button>
			<button onclick=notReq('delete${i}')>❌</button>
			</div>
			</div>
		`;
		user_task.value = ""
		task_arr.push(user_task_value)
		console.log(task_arr)
		}
	}
function done(el){
	el.style.textDecoration = "line-through"
}
function notReq(el){
	let d = document.querySelector(`.${el}`)
	// console.log(e)
	d.remove();
}

