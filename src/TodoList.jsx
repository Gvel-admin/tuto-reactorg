import { useEffect, useState } from 'react';
import './TodoList.style.css';

export function TodoList() {
  const [taskId, setTaskId] = useState(0);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [tasks, setTasks] = useState([]);
  const inputs = document.querySelectorAll('input');

  function handleTaskTitle(e) {
    setTaskTitle(e.target.value);
  }

  function handleTaskDate(e) {
    const convertedDate = new Date(e.target.value).getTime();
    setTaskDate(convertedDate);
  }

  function addToList(e, taskTitle, taskDate) {
    e.preventDefault();

    setTaskId((prevState) => prevState + 1); // BUG
    setTasks((prevState) => [
      ...prevState,
      {
        id: taskId,
        title: taskTitle,
        date: taskDate,
        creationDate: Date.now(),
      },
    ]);
    inputs.forEach((input) => (input.value = ''));
  }

  function formatDate(date) {
    return new Intl.DateTimeFormat('fr-FR').format(date);
  }

  useEffect(() => {
    console.log('taskId: ', taskId);
    console.log('taskTitle: ', taskTitle);
    console.log('taskDate: ', taskDate);
    console.log('tasks: ', tasks);
  }, [taskId, taskTitle, taskDate, tasks]);

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter a task"
          onChange={(e) => handleTaskTitle(e)}
        />
        <input type="date" onChange={(e) => handleTaskDate(e)} />
        <button
          type="submit"
          onClick={(e) => addToList(e, taskTitle, taskDate)}
        >
          Submit
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Creation (date)</th>
            <th>Due to (date)</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{formatDate(task.date)}</td>
                <td>{formatDate(task.creationDate)}</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
