import { useState } from "react";
const TaskItem = ({ task, id, deleteTask, updateTask, isComplete }) => {
    const [editing, setEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);
    const [isChecked, setIsChecked] = useState(isComplete);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleEditChange = (event) => {
        setEditedTask(event.target.value);
    };

    const handleEditSubmit = (event) => {
        event.preventDefault();
        if (editedTask.length >= 3 && /\S/.test(editedTask)) {
            updateTask(id, editedTask);
            setEditing(false);
        }
    };

    const handleCheck = () => {
        const newIsChecked = !isChecked;
        setIsChecked(newIsChecked);
        updateTask(id, task, newIsChecked);
    };

    return (
        <li className="crud__task-item">
            <div className="crud__task-check-wrap">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheck}
                />
                {editing ? (
                    <form
                        className="crud__form-edit-task"
                        onSubmit={handleEditSubmit}
                    >
                        <input
                            className="crud__edit-input-change"
                            type="text"
                            value={editedTask}
                            onChange={handleEditChange}
                        />
                        <button className="crud__btn-save-change" type="submit">
                            Save
                        </button>
                    </form>
                ) : (
                    <p className="crud__task-text">{task}</p>
                )}
            </div>
            <div className="crud__btn-edit-delete-wrapper">
                <button
                    className="crud__btn-edit-task"
                    onClick={handleEditClick}
                >
                    Edit
                </button>

                <button
                    onClick={() => deleteTask(id)}
                    className="crud__btn-delete-task"
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TaskItem;
