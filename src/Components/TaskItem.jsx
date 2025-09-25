import React from "react";

const TaskItem = ({ task }) => {
  return (
    <div className="border border-gray-300 rounded-md p-3 mb-3 flex items-center gap-3">
      {/* Checkbox */}
      <input 
        type="checkbox" 
        checked={task.completed} 
        readOnly
      />

      {/* Task Details */}
      <div className="flex gap-2">
        <h3 className="text-lg text-white font-semibold">
          {task.title}
        </h3>
        <p className="text-sm text-white ">Priority: {task.priority}</p>
        <p className="text-sm text-white ">Category: {task.category}</p>
        <p className="text-sm text-white ">Due Date: {task.dueDate}</p>
      </div>
    </div>
  );
};

export default TaskItem;
