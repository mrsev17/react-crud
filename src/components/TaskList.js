const TaskList = ({ data, handleDelete }) => {
    return (
        <div className="crude__task-list">
            {data.map((item, i) => {
                return (
                    <div key={i} className="crude__task-card">
                        <h3>{item}</h3>
                        <div className="crude__wrapper-btn-edit-delete">
                            <button className="crude__btn-edit-task">
                                Edit
                            </button>
                            <button
                                className="crude__btn-delete-task"
                                onClick={() => handleDelete(i)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TaskList;
