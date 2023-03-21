import TaskItem from "./TaskItem";
const TaskList = ({ data, setData, handleDelete }) => {
    return (
        <div className="crude__task-list">
            {data.map((item, i) => (
                <TaskItem
                    key={i}
                    item={item}
                    handleDelete={handleDelete}
                    data={data}
                    setData={setData}
                    index={i}
                />
            ))}
        </div>
    );
};

export default TaskList;
