import React, { useContext } from "react";
import "./home.css";
import { TaskContext } from "../context/TaskContexts";

const Home = () => {
  const {
    inProgressTasks,
    setInprogressTasks,
    completedTask,
    setCompletedTasks,
  } = useContext(TaskContext);

  const updateStatus = (indexToRemove) => {
    setCompletedTasks([...completedTask, inProgressTasks[indexToRemove]]);
    setInprogressTasks((prevElements) =>
      prevElements.filter((_, index) => index !== indexToRemove),
    );
    console.log(completedTask);
  };

  const deleteTask = (indexToRemove) => {
    setInprogressTasks((prevElements) =>
      prevElements.filter((_, index) => index !== indexToRemove),
    );
  };

  return (
    <>
      <div className="allTasks">
        <table className="taskTable">
          <thead>
            <tr>
              <th>Sl no.</th>
              <th>Task Name</th>
              <th>Description</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          {inProgressTasks.map((element, index) => (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{element.task}</td>
                <td>{element.description}</td>
                <td>
                  <input type="checkbox" onChange={() => updateStatus(index)} />
                </td>
                <td>
                  <button
                    className="deleteBtn"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Home;
