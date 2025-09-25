import React from "react";
import { Plus } from "lucide-react";

const Taskform = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <>
    <div className="border border-gray-300 rounded-md p-5 ">
        <form action="" onSubmit={handleSubmit}>
            <div className="flex">
            <input type="text" placeholder="What needs to be done???" className="border text-white bg-gray-900 rounded-md p-1 w-10/12 " />
            <button className="text-white py-2.5 px-5 bg-blue-500 rounded-md ml-4 flex" type="submit"> <span className="mr-3"> <Plus /></span> Add Task</button>
            </div>
            <div className="flex gap-5 mt-5">
            <div className="flex flex-col">
                <h2>Priority</h2>
                <select name="priority" id="priority"className="w-66 bg-gray-900 text-white p-1 rounded-md">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <div className="flex flex-col">
                <h2>Category</h2>
                <select name="category" id="category" className="w-66 bg-gray-900  text-white p-1 rounded-md">
                    <option  value="today">Today</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
            </div>
            <div className="flex flex-col">
                <h2>Due Date</h2>
                <input type="date" name="due-date" id="due-date" className="w-66 bg-gray-900 text-white p-1 rounded-md"/>
            </div>
            </div>
        </form>
    </div>
    </>
  );
};

export default Taskform;
