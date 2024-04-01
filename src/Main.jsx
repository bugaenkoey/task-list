import { useEffect, useState } from "react";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";

function Main() {
    // const [task, setTask] = useState([{id:0,title:"Clean",status:false}]);
    const [task, setTask] = useState(() => {
        const storeTodos = localStorage.getItem("task");
        if (!storeTodos) {
            return []
        } else { 
            return JSON.parse(storeTodos)
        }
    });

    const [taskTile, setTaskTitle] = useState("");
    
    useEffect(() => {localStorage.setItem("task", JSON.stringify(task))}, [task]);

    const addTask = (e) => {
        const storeTodos = JSON.parse(localStorage.getItem("task"));

        if (e.key === "Enter"&& e.target.value !== "") {
            setTask([...storeTodos, {
                id: uuidv4(), //Для унікального нумерування елементів в React існує метод uuidv4()
                title: taskTile,
                status: false
                }            
            ]);
            setTaskTitle("");        
        }
    }
    
    const date = new Date();
    const monthNames = ["January", "February", "March", "April", "May",
        "June", "July", "August", "September", "Oktober", "November", "December"];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

     
    return (<div className="container"> 
        <h1>Note your task</h1>
        <span>{day + " " + month + " " + year}</span>
        <div className="input-filed">
            <input type="text"
                value={taskTile}
                onKeyDown={addTask}
                onChange={event => setTaskTitle(event.target.value)}
                name=""
                id="" />
            <label htmlFor="">Task name</label>
        </div>
        <List task ={task}/>
    </div>);
}
export default Main;