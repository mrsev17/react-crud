import { useState } from "react";
import "./App.css";
import InputForTask from "./components/InputForTask";
import TaskList from "./components/TaskList";

function App() {
    const [data, setData] = useState([]);
    const deleteTask = (index) => {
        setData(data.filter((task, idx) => idx !== index));
    };

    return (
        <div className="App">
            <InputForTask data={data} setData={setData} />
            <TaskList data={data} deleteTask={deleteTask} />
        </div>
    );
}

export default App;
