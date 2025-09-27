import React, { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import { Pencil, Trash } from "lucide-react";

const TaskItem = ({ tasks }) => {
  const { setEditingTask, deleteTask, toggleCompletion } = useContext(TaskContext);

  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-md p-3 mb-3 flex items-center gap-3 bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md transition">
      <input
        type="checkbox"
        checked={tasks.completed}
        onChange={() => toggleCompletion(tasks.id)}
        className="w-5 h-5 accent-blue-500"
      />
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col gap-1 relative">
          <h3
            className={`text-lg font-semibold ${
              tasks.completed
                ? "line-through text-gray-500"
                : "text-gray-900 dark:text-white"
            }`}
          >
            {tasks.title}
          </h3>
          <div className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
            <p><span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${
        tasks.priority === "Low"
          ? "bg-green-500"
          : tasks.priority === "Medium"
          ? "bg-yellow-500"
          : "bg-red-500"
      }`}>{tasks.priority}</span></p>
            <p><span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${
        tasks.category === "Today"
          ? "bg-red-500"
          : tasks.category === "Work"
          ? "bg-yellow-500"
          : tasks.category === "Personal"
          ? "bg-blue-500": "bg-green-500"
      }`}>{tasks.category}</span></p>
            <p><span  className="inline-block px-3 py-1 text-xs font-medium rounded-full 
    bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 shadow-sm">{tasks.dueDate}</span></p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setEditingTask(tasks)}
            className="bg-amber-400 hover:bg-amber-500 rounded-md p-2 text-white transition"
          >
            <Pencil size={16} />
          </button>
          <button
            onClick={() => deleteTask(tasks.id)}
            className="bg-red-600 hover:bg-red-700 rounded-md p-2 text-white transition"
          >
            <Trash size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
