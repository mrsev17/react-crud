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

    return (
        <div className="App">
            <div className="crud__wrapper">
                <MainInput data={data} setData={setData} />
                <TaskList data={data} deleteTask={deleteTask} />
            </div>
        </div>
    );
}

export default App;
