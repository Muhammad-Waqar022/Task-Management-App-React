import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="flex min-h-screen ">
      {isSidebarOpen && (
        <div
          className={`w-64 hidden md:block bg-neutral-900 text-white p-5 transition-transform duration-700 ease-in-out flex-shrink-0 `}
        >
          <Sidebar />
        </div>
      )}
      <div className="flex flex-col flex-1 p-4 bg-white dark:bg-gray-900">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="mt-8 px-6">
          <Taskform />
        </div>
        <div className=" mt-4 px-6">
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
