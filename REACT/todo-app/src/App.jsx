import React, { useState } from "react";
import Nav from "./components/Nav";
import AddTask from "./components/AddTask";
import Home from "./components/Home";
import Completed from "./components/Completed";
import { TaskContext } from "./context/TaskContexts";
import { useSearchParams } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [inProgressTasks, setInprogressTasks] = useState([]);
  const [completedTask, setCompletedTasks] = useState([]);

  return (
    <div>
      <TaskContext.Provider
        value={{
          inProgressTasks,
          setInprogressTasks,
          completedTask,
          setCompletedTasks,
        }}
      >
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="addTask" element={<AddTask />} />
            <Route path="completedTask" element={<Completed />} />
            <Route path="" element={<>404 not found</>} />
          </Routes>
        </BrowserRouter>
      </TaskContext.Provider>
    </div>
  );
};

export default App;
