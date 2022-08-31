window.addEventListener('load', () => {
    const task_form = document.querySelector("#new-task-form");
    const task_input = document.querySelector("#new-task-input");
    const task_list = document.querySelector("#tasks");

    task_form.addEventListener('submit', (e) => {
        e.preventDefault();

        const new_task = task_input.value;

        const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

        
    })
})