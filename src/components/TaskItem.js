const TaskItem = ({ task, id, deleteTask }) => {
    return (
        <li className="crud__task-item">
            <div>
                <p className="crud__task-text">{task}</p>
            </div>
            <div>
                <button onClick={() => deleteTask(id)} className="crud__btn-delete-task">Delete</button>
            </div>
        </li>
    );
};

export default TaskItem;
