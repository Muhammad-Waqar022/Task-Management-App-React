// import React, { useContext, useEffect, useState } from "react";
// import { Plus,Pencil } from "lucide-react";
// import { TaskContext } from "../Context/TaskContext";

// const Taskform = () => {
//   const [title, setTitle] = useState("");
//   const [priority, setPriority] = useState("Low");
//   const [category, setCategory] = useState("Today");
//   const [dueDate, setDueDate] = useState("");

//   const { addTask, updateTask, editingTask, setEditingTask } =
//     useContext(TaskContext);

//   // ✅ Prefill form when editingTask changes
//   useEffect(() => {
//     if (editingTask) {
//       setTitle(editingTask.title || "");
//       setPriority(editingTask.priority || "Low");
//       setCategory(editingTask.category || "Today");
//       setDueDate(editingTask.dueDate || "");
//     } else {
//       resetForm();
//     }
//   }, [editingTask]);

//   // ✅ Reset function
//   const resetForm = () => {
//     setTitle("");
//     setPriority("Low");
//     setCategory("Today");
//     setDueDate("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newTask = {
//       id: editingTask ? editingTask.id : Date.now(), // keep same id if updating
//       title,
//       priority,
//       category,
//       dueDate,
//       completed: editingTask ? editingTask.completed : false,
//     };

//     if (editingTask) {
//       updateTask(newTask); // ✅ Update existing task
//     } else {
//       addTask(newTask); // ✅ Add new task
//     }

//     resetForm();
//     setEditingTask(null); // ✅ Exit edit mode
//   };

//   return (
//     <div className="border border-gray-300 rounded-md p-5">
//       <form onSubmit={handleSubmit}>
//         <div className="flex">
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="What needs to be done???"
//             className="border text-white dark:bg-neutral-900 rounded-md p-1 w-10/12"
//             required
//           />
//           <button
//   className="text-white py-2 px-4 bg-blue-500 rounded-md ml-4 flex items-center"
//   type="submit"
// >
//   {editingTask ? (
//    <>
//    <div className="flex items-center">
//       <span className="mr-2">
//         <Pencil size="16"/>
//       </span>
//      <p className="text-sm">Update Task</p> 
//    </div>
//     </>
//   ) : (
//     <>
//       <span className="mr-2">
//         <Plus size="16"/>
//       </span>
//       <p className="text-sm">Add Task</p> 
//     </>
//   )}
// </button>

//         </div>

//         <div className="flex gap-5 mt-5">
//           <div className="flex flex-col">
//             <h2>Priority</h2>
//             <select
//               name="priority"
//               id="priority"
//               value={priority}
//               onChange={(e) => setPriority(e.target.value)}
//               className="w-66 dark:bg-neutral-900 text-white p-1 rounded-md"
//             >
//               <option value="Low">Low</option>
//               <option value="Medium">Medium</option>
//               <option value="High">High</option>
//             </select>
//           </div>

//           <div className="flex flex-col">
//             <h2>Category</h2>
//             <select
//               name="category"
//               id="category"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-66 dark:bg-neutral-900 text-white p-1 rounded-md"
//             >
//               <option value="Today">Today</option>
//               <option value="Work">Work</option>
//               <option value="Personal">Personal</option>
//             </select>
//           </div>

//           <div className="flex flex-col">
//             <h2>Due Date</h2>
//             <input
//               type="date"
//               name="due-date"
//               id="due-date"
//               value={dueDate}
//               onChange={(e) => setDueDate(e.target.value)}
//               className="w-66 dark:bg-neutral-900 text-white p-1 rounded-md"
//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Taskform;



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
        <div className="flex gap-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-5 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition"
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
        </div>

        <div className="flex gap-6">
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
      </form>
    </div>
  );
};

export default Taskform;

