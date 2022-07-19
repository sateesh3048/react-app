import React from "react";
import { useState, useEffect } from "react";
import { Task } from "./Task";
import AddTask from "./AddTask";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "../Button";
const Tasks = ({}) => {
  const [tasks, setTasks] = useState([]);
  const [showAddBtn, setShowAddBtn] = useState(false);
  const { curUser } = useAuth();

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      console.log("tasksFromServer");
      console.log(tasksFromServer);
      const task = tasksFromServer[0];
      console.log(task.id);
      console.log(task.title);
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // Fetch all Tasks
  const fetchTasks = async () => {
    const res = await fetch(
      `http://localhost:3001/tasks?user_id=${curUser.id}`
    );
    const data = await res.json();
    console.log("all tasks");
    console.log(data);
    return data;
  };

  // Fetching single Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // Adding Task
  const addTask = async (task) => {
    const newTask = {
      task: { title: task.text, completed: task.reminder, user_id: curUser.id },
    };

    const res = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    const data = await res.json();
    console.log(data);
    setTasks([...tasks, data]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE",
    });
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onToggleAdd = () => setShowAddBtn(!showAddBtn);
  // Toggle Reminder => Updating data
  const toggleReminder = async (id) => {
    console.log("setting reminder", id);

    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, completed: !taskToToggle.completed };
    const payload = { task: updTask };
    console.log(updTask);
    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: data.completed } : task
      )
    );
  };

  return (
    <>
      <h1>Task Tracker</h1>
      <Button
        color={showAddBtn ? "red" : "green"}
        text={showAddBtn ? "close" : "Add Task"}
        onClick={onToggleAdd}
      />
      {showAddBtn && <AddTask onAdd={addTask} />}
      <div className="tasks">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ))}
      </div>
    </>
  );
};

export default Tasks;
