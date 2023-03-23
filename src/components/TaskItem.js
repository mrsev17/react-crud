// import { useState } from "react";
// const TaskItem = ({ item, i, index, handleDelete, data, setData }) => {
//     const [taskName, setTaskName] = useState(item);
//     const [isEditing, setIsEditing] = useState(false);

//     const handleChange = (e) => {
//         let value = e.target.value;
//         setTaskName(value);
//         const newData = [...data];
//         newData[index] = value;
//         setData(newData);
//     };

//     const handleKeyDown = (e) => {
//         if (e.key === "Enter") {
//             setIsEditing(false);
//         }
//     };

//     const handleEditClick = () => {
//         setIsEditing(true);
//     };

//     return (
//         <div className="crude__task-card">
//             <input
//                 // className="crud__edit-input-change"
//                 className={
//                     isEditing
//                         ? "crud__edit-input-change crud__input-edit-focus"
//                         : "crud__edit-input-change"
//                 }
//                 type="text"
//                 value={taskName}
//                 onChange={handleChange}
//                 onKeyDown={handleKeyDown}
//                 readOnly={!isEditing}
//             />
//             <div className="crude__wrapper-btn-edit-delete">
//                 {isEditing ? (
//                     <button
//                         className="crude__btn-edit-task"
//                         onClick={() => setIsEditing(false)}
//                     >
//                         Save
//                     </button>
//                 ) : (
//                     <button
//                         className="crude__btn-edit-task"
//                         onClick={handleEditClick}
//                     >
//                         Edit
//                     </button>
//                 )}

//                 {/* <button className="crude__btn-edit-task">Edit</button> */}

//                 <button
//                     className="crude__btn-delete-task"
//                     onClick={() => handleDelete(i)}
//                 >
//                     Delete
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default TaskItem;

import { useState } from "react";

const TaskItem = ({ item, i, index, handleDelete, data, setData }) => {
    const [taskName, setTaskName] = useState(item);
    const [isEditing, setIsEditing] = useState(false);

    // const handleChange = (e) => {
    //     let value = e.target.value;
    //     setTaskName(value);
    //     const newData = [...data];
    //     newData[index] = value;
    //     setData(newData);
    // };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        const newData = [...data];
        newData[index] = taskName;
        setData(newData);
    };

    const handleChange = (e) => {
        let value = e.target.value;
        setTaskName(value);
    };

    return (
        <div className="crude__task-card">
            {isEditing ? (
                // <div className="crud__wrapper-input-btn">
                <input
                    className="crud__edit-input-change crud__input-edit-focus"
                    type="text"
                    value={taskName}
                    onChange={handleChange}
                />
            ) : (
                // </div>
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
