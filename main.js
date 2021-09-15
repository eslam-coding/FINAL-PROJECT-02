body = document.querySelector('body')
taskInput = document.getElementById('taskInput')
addBtn = document.getElementById('addBtn')
noTasks = document.getElementById('noTasks')
allTasks = document.getElementById('allTasks')
invalidData = document.getElementById('invalidData')
invalidData2 = document.getElementById('invalidData2')
invalidData3 = document.getElementById('invalidData3')
closeBtn = document.getElementById('closeBtn')
closeBtn2 = document.getElementById('closeBtn2')
closeBtn3 = document.getElementById('closeBtn3')
modal = document.getElementById('modal')
modalBtn = document.getElementById('modalBtn')
switchBtn = document.getElementById('switchBtn')






let showModalFunction = () => {
    modal.classList.toggle('block')
}
modalBtn.addEventListener('click', showModalFunction)



/* TASK CARD */

let addTask = () => {
    taskData = taskInput.value
    if (taskInput.value.length == 0) {
        invalidData.classList.remove('none')
    } else if (taskInput.value.length < 2) {
        invalidData2.classList.remove('none')
    } else if (taskInput.value.length > 20) {
        invalidData3.classList.remove('none')
    } else {
        noTasks.classList.add('none')
        taskData = taskInput.value
        allTasks.innerHTML += `<div class="task alert alert-info"> ${taskData} 
        <i class="delete far fa-trash-alt float-right" style="font-size: 20px; bg-white text-dark"></i>
        </div>`
        taskInput.value = ""
        allTasks.addEventListener('click', function (e) {
            if (e.target.classList.contains('task')) {
                e.target.classList.add('dicoration')
            }

        })
        showModalFunction()
    }
}

/* END TASKS */

addBtn.addEventListener('click', addTask)


let closeBtnFunction = () => {
    invalidData.classList.add('none')
}
closeBtn.addEventListener('click', closeBtnFunction)


let closeBtn2Function = () => {
    invalidData2.classList.add('none')
}
closeBtn2.addEventListener('click', closeBtn2Function)

let closeBtn3Function = () => {
    invalidData3.classList.add('none')
}
closeBtn3.addEventListener('click', closeBtn3Function)

let noTasksFunction = () => {
    if (allTasks.childElementCount == 0) {
        noTasks.classList.remove('none')
    }
}
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
        noTasksFunction()
    }
})