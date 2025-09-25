import React from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const task = [
    {
      id: 1,
      title: "Task 1",
      priority: "High",
      category: "Work",
      dueDate: "2023-10-10",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      priority: "Medium",
      category: "Personal",
      dueDate: "2023-10-12",
      completed: true,
    },
    {
      id: 3,
      title: "Task 3",
      priority: "Low",
      category: "Shopping",
      dueDate: "2023-10-15",
      completed: true,
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Task List</h1>
      {task.map((t) => (
        <TaskItem key={t.id} task={t} />
      ))}
    </div>
  );
};

export default TaskList;
