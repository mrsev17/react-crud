import { useState } from "react";
const TaskItem = ({ item, i, index, handleDelete, data, setData }) => {
    const [taskName, setTaskName] = useState(item);

    const handleChange = (event) => {
        setTaskName(event.target.value);
        const newData = [...data];
        newData[index] = event.target.value;
        setData(newData);
    };
    return (
        <div className="crude__task-card">
            <input className="crud__edit-input-change" type="text" value={taskName} onChange={handleChange} />
            <div className="crude__wrapper-btn-edit-delete">
                <button className="crude__btn-edit-task">Edit</button>
                <button
                    className="crude__btn-delete-task"
                    onClick={() => handleDelete(i)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
