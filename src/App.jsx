// import "./App.css";
// import Header from "./Components/Header";
// import Sidebar from "./Components/Sidebar";
// import Taskform from "./Components/Taskform";
// import Filters from "./Components/Filters";
// import TaskList from "./Components/TaskList";

// function App() {
//   return (
//     <div className="grid grid-cols-12 h-screen">
//       <div className="col-span-2 bg-neutral-900 text-white p-5">
//         <Sidebar />
//       </div>
//       <div className="col-span-10 bg-white dark:bg-gray-900 p-1">
//         <Header />
//         <div className="mt-8 px-15">
//           <Taskform />
//         </div>
//         <div>
//           <TaskList />{" "}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen ">
      {isSidebarOpen && (
        <div className={`w-64 bg-neutral-900 text-white p-5 transition-transform duration-700 ease-in-out  `}>
          <Sidebar />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 bg-white dark:bg-gray-900">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="mt-8 px-6">
          <Taskform />
        </div>
        <div className="px-6 mt-4">
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
