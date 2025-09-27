import React, { useContext, useEffect, useState } from "react";
import { Plus, Pencil } from "lucide-react";
import { TaskContext } from "../Context/TaskContext";

const Taskform = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [category, setCategory] = useState("Today");
  const [dueDate, setDueDate] = useState("");

  const { addTask, updateTask, editingTask, setEditingTask } =
    useContext(TaskContext);

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title || "");
      setPriority(editingTask.priority || "Low");
      setCategory(editingTask.category || "Today");
      setDueDate(editingTask.dueDate || "");
    } else {
      resetForm();
    }
  }, [editingTask]);

  const resetForm = () => {
    setTitle("");
    setPriority("Low");
    setCategory("Today");
    setDueDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: editingTask ? editingTask.id : Date.now(),
      title,
      priority,
      category,
      dueDate,
      completed: editingTask ? editingTask.completed : false,
    };

    if (editingTask) {
      updateTask(newTask);
    } else {
      addTask(newTask);
    }

    resetForm();
    setEditingTask(null);
  };

  return (
    <div className="border border-gray-200 dark:border-gray-300 rounded-lg p-6 bg-white dark:bg-gray-900 shadow-sm">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
    <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex flex-col flex-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="flex flex-col flex-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Today">Today</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
            </select>
          </div>

          <div className="flex flex-col flex-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Due Date
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-5 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition"
        >
          {editingTask ? (
            <>
              <Pencil size={16} />
              Update Task
            </>
          ) : (
            <>
              <Plus size={16} />
              Add Task
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Taskform;
