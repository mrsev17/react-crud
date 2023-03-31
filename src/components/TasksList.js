import { CSSTransition, TransitionGroup } from "react-transition-group";
import TaskItem from "./TaskItem";
const TaskList = ({ data, deleteTask, updateTask, handleCheckboxClick }) => {
    return (
        <ul>
            <TransitionGroup className="crud__list-area">
                {data.map(({ task, id, isComplete }) => (
                    <CSSTransition key={id} classNames="fade" timeout={500}>
                        <TaskItem
                            isComplete={isComplete}
                            task={task}
                            deleteTask={deleteTask}
                            updateTask={updateTask}
                            id={id}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
};

export default TaskList;
