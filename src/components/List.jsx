import Item from "./Item";
export default function List({ task }) {
    // console.log({ task });
    return (
        <ul>
            {task.map(item => <Item key={item.id} {...item} />)}
        </ul>
    )
}