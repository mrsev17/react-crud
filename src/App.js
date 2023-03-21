import { useState } from "react";
import "./App.css";
import InputForTask from "./components/InputForTask";
import TaskList from "./components/TaskList";

function App() {
    const [data, setData] = useState([]);
    const deleteTask = (index) => {
        setData(data.filter((task, idx) => idx !== index));
    };

    const handleDelete = (index) => {
        data.splice(index, 1);
        deleteTask(data);
    };

    return (
        <div className="App">
            <InputForTask data={data} setData={setData} />
            <TaskList
                setData={setData}
                data={data}
                deleteTask={deleteTask}
                handleDelete={handleDelete}
            />
        </div>
    );
}

export default App;
