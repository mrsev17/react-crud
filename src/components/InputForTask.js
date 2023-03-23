import { useState } from "react";

const InputForTask = ({ data, setData }) => {
    const [task, setTask] = useState("");
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (task.length > 3) {
            setData([...data, task]);
            setTask("");
        }
        // setData([...data, task]);
        // setTask("");
    };

    return (
        <div className="crude__wrapper-input-btn">
            <form className="crud__form-list" onSubmit={handleFormSubmit}>
                <label>
                    <input
                        className="crud__input-task"
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                </label>
                <button className="crud__add-task-btn" type="submit">
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default InputForTask;
