import React, { useContext, useState } from "react";
import "./addTask.css";
import { TaskContext } from "../context/TaskContexts";

const AddTask = () => {
  const [currentTask, setCurrentTask] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const { inProgressTasks, setInprogressTasks } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentTask && currentDescription) {
      setInprogressTasks([
        ...inProgressTasks,
        { task: currentTask, description: currentDescription },
      ]);
      setCurrentTask("");
      setCurrentDescription("");
    } else {
      alert("something went wrong check task name and description");
    }
  };
  return (
    <>
      <div className="addTask">
        <form>
          <h3>Add Task</h3>
          <div>
            <label htmlFor="title">Task</label>
            <input
              type="text"
              name="title"
              className="titleInput"
              value={currentTask}
              onChange={(e) => setCurrentTask(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="taskDesc">Add Description: </label>
            <textarea
              name="taskDesc"
              id="taskDesc"
              value={currentDescription}
              onChange={(e) => setCurrentDescription(e.target.value)}
            >
              Add description
            </textarea>
          </div>
          <button onClick={handleSubmit}>Add Task</button>
        </form>
      </div>
    </>
  );
};

export default AddTask;
