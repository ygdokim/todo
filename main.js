 'use strict';
        //체크박스
        const taskItems = document.querySelectorAll('li');
        for (let i = 0; i<taskItems.length; i++){
            const checkBox = taskItems[i].querySelector('input');
            checkBox.addEventListener('change', function() {
                if (checkBox.checked) {
                    taskItems[i].style.color = 'lightgrey';
                    taskItems[i].style.textDecoration = 'line-through';
                }else {
                    taskItems[i].style.color = '';
                    taskItems[i].style.textDecoration = '';
                }
            });
        };

        //새로운 할 일 추가
        let textBox = document.querySelector('#textbox');
        const addButton = document.querySelector('#add');
        const taskList = document.querySelector('#TaskList');
        
        function addList(_task) {
            let newItem = document.createElement('li');
            const newCheckBox = document.createElement('input');
            taskList.appendChild(newItem);
            newItem.textContent = _task;
            newCheckBox.setAttribute('type', 'checkbox');
            newItem.appendChild(newCheckBox);
        };
        addButton.onclick = function addTask() {
            addList(textBox.value);
        };