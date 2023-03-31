import { CSSTransition, TransitionGroup } from "react-transition-group";
import TaskItem from "./TaskItem";
const TaskList = ({ data, deleteTask }) => {
    return (
        <ul>
            <TransitionGroup className="crud__list-area">
                {data.map(({ task, id }) => (
                    <CSSTransition key={id} classNames="fade" timeout={500}>
                        <TaskItem task={task} deleteTask={deleteTask} id={id} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
};

export default TaskList;
