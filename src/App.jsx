import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Taskform from "./Components/Taskform";
import Filters from "./Components/Filters";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="grid grid-cols-12 h-screen">
      {/* Sidebar */}
      <div className="col-span-2 bg-gray-900 text-white p-5">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="col-span-10 bg-gray-500 px-6 ">
        <Header />
        <div className="mt-8">
          <Taskform />
        </div>
        <div className="mt-8">
          <Filters />
        </div>
        <div>
          <TaskList />{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
