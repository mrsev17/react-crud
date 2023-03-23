import { useState } from "react";

const TaskItem = ({ item, i, index, handleDelete, data, setData }) => {
    const [taskName, setTaskName] = useState(item);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        if (taskName.length > 3) {
            const newData = [...data];
            newData[index] = taskName;
            setData(newData);
        } else if (taskName.length <= 3) {
            setTaskName(data[index]);
        }
    };

    const handleChange = (e) => {
        let value = e.target.value;
        setTaskName(value);
    };

    return (
        <div className="crude__task-card">
            {isEditing ? (
                <input
                    className="crud__edit-input-change crud__input-edit-focus"
                    type="text"
                    value={taskName}
                    onChange={handleChange}
                />
            ) : (
                <div className="crud__task-name">{taskName}</div>
            )}
            <div className="crude__wrapper-btn-edit-delete">
                {isEditing ? (
                    <button
                        className="crud__btn-save-task"
                        onClick={handleSaveClick}
                    >
                        Save
                    </button>
                ) : (
                    <button
                        className="crude__btn-edit-task"
                        onClick={handleEditClick}
                    >
                        Edit
                    </button>
                )}
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
