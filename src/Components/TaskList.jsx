import React, { useContext, useState } from "react";
import TaskItem from "./TaskItem";
import { TaskContext } from "../Context/TaskContext";
import Filters from "./Filters";

const TaskList = () => {
  const { tasks, category, searchText } = useContext(TaskContext);
  const [filter, setFilter] = useState("all");

  const filteredByCategory = tasks.filter((task) => {
    if (category === "All" || category === "") return true;
    return task.category === category;
  });

  const filteredByStatus = filteredByCategory.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const finalFilteredTasks = filteredByStatus.filter((task) =>
    task.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const getMessage = () => {
    if (tasks.length === 0) return "No tasks available. Please add a task.";
    if (filter === "active" && finalFilteredTasks.length === 0)
      return "No pending tasks! Great job!";
    if (filter === "completed" && finalFilteredTasks.length === 0)
      return "No completed tasks yet.";
    if (category !== "All" && finalFilteredTasks.length === 0)
      return `No tasks in "${category}" category.`;
    if (searchText && finalFilteredTasks.length === 0)
      return `No tasks matching "${searchText}".`;
    return null;
  };

  const message = getMessage();

  return (
    <>
      <div className="mt-8 ">
        <Filters setFilter={setFilter} />
        <div>
          {finalFilteredTasks.length > 0 ? (
            finalFilteredTasks.map((t) => <TaskItem key={t.id} tasks={t} />)
          ) : (
            <p className="text-white text-center mt-15">{message}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskList;
