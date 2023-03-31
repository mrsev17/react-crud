import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const MainInput = ({ data, setData }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length >= 3 && /\S/.test(text)) {
            const newData = [
                ...data,
                {
                    task: text,
                    isComplete: false,
                    id: uuidv4(),
                },
            ];
            setData(newData);
            setText("");
        }
    };
    return (
        <form className="crud__form-wrapper" onSubmit={handleSubmit}>
            <input
                className="crud__main-input"
                placeholder="Input your task"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="crud__main-submit" type="submit">
                Add Task
            </button>
        </form>
    );
};

export default MainInput;
