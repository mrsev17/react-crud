import { useState } from "react";
import "./App.css";
import MainInput from "./components/MainInput";
import TaskList from "./components/TasksList";

function App() {
    const [data, setData] = useState([]);

    const deleteTask = (index) => {
        const newData = data.filter(({ id }) => {
            return id !== index;
        });
        setData(newData);
    };

    const updateTask = (id, editedTask, isChecked) => {
        const newData = data.map((task) => {
            if (task.id === id) {
                return { ...task, task: editedTask, isComplete: isChecked };
            }
            return task;
        });
        setData(newData);
    };


    return (
        <div className="App">
            <div className="crud__wrapper">
                <MainInput data={data} setData={setData} />
                <TaskList data={data} deleteTask={deleteTask} updateTask={updateTask}  />
            </div>
        </div>
    );
}

export default App;
