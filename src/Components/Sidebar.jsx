import React, { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import { SquareCheckBig, Calendar, Briefcase, User } from "lucide-react";

const Sidebar = () => {
  const { tasks, setCategory, category } = useContext(TaskContext);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const activeTasks = totalTasks - completedTasks;

  const getButtonClass = (cat) =>
    category === cat
      ? "text-left text-md flex items-center gap-3 p-1 rounded-md bg-indigo-500 font-bold"
      : "text-left text-md flex items-center gap-3 text-gray-400 hover:text-white";

  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-3 items-center mb-8">
        <div>
          <SquareCheckBig size={37} className="bg-blue-500 p-1 rounded-md" />
        </div>
        <div>
          <h1 className="text-xl font-bold">FocusBoard</h1>
          <p className="text-sm text-gray-400">Plan. Focus. Done.</p>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-sm font-semibold">Categories</h2>
        <div className="mt-4 flex flex-col gap-3">
          <button
            onClick={() => setCategory("Today")}
            className={getButtonClass("Today")}
          >
            <Calendar size={16} /> Today
          </button>
          <button
            onClick={() => setCategory("Work")}
            className={getButtonClass("Work")}
          >
            <Briefcase size={16} /> Work
          </button>
          <button
            onClick={() => setCategory("Personal")}
            className={getButtonClass("Personal")}
          >
            <User size={16} /> Personal
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-sm font-semibold">Summary</h2>
        <div className="mt-4">
          <p className="text-gray-400 flex items-center justify-between text-md">
            Active Tasks <span className="text-white">{activeTasks}</span>
          </p>
          <p className="text-gray-400 flex items-center justify-between text-md">
            Completed <span className="text-white">{completedTasks}</span>
          </p>
          <p className="text-gray-400 flex items-center justify-between text-md">
            Total <span className="text-white">{totalTasks}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
