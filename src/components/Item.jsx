import { useState } from "react";
export default function Item({ title, id, status }) {
    
    const [checked,setChecked]=useState(status);
    const classes = ['todo'];

    if (checked) {
        classes.push('status')        
    }
    
    const updateStatus = () => {
        // debugger
        setChecked(!checked);
        const storeTodos = JSON.parse(localStorage.getItem('task'));
        
        storeTodos.map((el) => {
            if (el.id === id) {
                el. status = !checked;
            }
            return true
        })
        // console.log(storeTodos);
        localStorage.setItem("task", JSON.stringify(storeTodos));
    };

    const [visible, setVisible] = useState(true);

    const remuveElement = () => {
        setVisible(prev => !prev);
        const storeTodos = JSON.parse(localStorage.getItem("task"));

        let remuveTodos = storeTodos.filter(item => {
            if (item.id !== id) {
                return true
            }
            return false
        });
        localStorage.setItem("task", JSON.stringify(remuveTodos));
   }
    
    return (
        <>
            {visible && (
                <li className={classes.join(' ')}>
                    <label >
                        <input type="checkbox" checked={checked}onChange={updateStatus} />
                        <span> {title} </span>
                        <i className="material-icons red-text" onClick={remuveElement}> X </i>
                    </label>
                </li>
            )}
        </>
    )
}