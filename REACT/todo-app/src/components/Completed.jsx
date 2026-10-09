import React, { useContext } from "react";
import "./completed.css";
import { TaskContext } from "../context/TaskContexts";

const Completed = () => {
  const { completedTask, setCompletedTasks } = useContext(TaskContext);

  const deleteTask = (indexToRemove) => {
    setCompletedTasks((prevElements) =>
      prevElements.filter((_, index) => index !== indexToRemove),
    );
  };

  return (
    <div>
      <div className="completedTasks">
        <table className="completedTask">
          <thead>
            <tr>
              <th>Sl no</th>
              <th>Task Name</th>
              <th>Description</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          {completedTask.map((element, index) => (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{element.task}</td>
                <td>{element.description}</td>
                <td>Completed</td>
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
    </div>
  );
};

export default Completed;
