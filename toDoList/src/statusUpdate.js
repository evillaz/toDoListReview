import ToDoList from './toDoList';

const toDoList = new ToDoList();

const checkStatus = (checkBox) => {
  if (checkBox.classList.contains('true')) {
    const myCheckBox = checkBox;
    myCheckBox.checked = true;
    checkBox.closest('.task').querySelector('.labelText').classList.toggle('lineThrough');
  }
};

const changeStatus = (target) => {
  if (target.classList.contains('checkBox')) {
    toDoList.toDoTasks = JSON.parse(localStorage.getItem('toDoList'));
    const parentNode = target.closest('.task');
    let taskID = parentNode.getAttribute('id') - 1;
    toDoList.toDoTasks[taskID].completed = !toDoList.toDoTasks[taskID].completed;
    localStorage.setItem('toDoList', JSON.stringify(toDoList.toDoTasks));
  }
};

const filterCompleted = () => {
  const tasksArray = JSON.parse(localStorage.getItem('toDoList'));
  const filtered = tasksArray.filter((obj) => obj.completed !== true);
  filtered.forEach(() => {
    localStorage.setItem('toDoList', JSON.stringify(filtered));
  });
};

export {
  checkStatus,
  changeStatus,
  filterCompleted,
};
