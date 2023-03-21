import TaskItem from "./TaskItem";
const TaskList = ({ data, handleDelete }) => {
    return (
        <div className="crude__task-list">
            {data.map((item, i) => (
                <TaskItem key={i} item={item} handleDelete={handleDelete} />
            ))}
        </div>
    );
};

export default TaskList;
