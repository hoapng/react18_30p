import {useState} from "react"

const MyComponents = () => {
    const [newToDo, setNewToDo] = useState("");
    const [ListToDo, setListToDo] = useState([
        { id: 'todo1', value: 'Doing homework' },
        { id: 'todo2', value: 'Learning React' }
    ]);
    const handleChangeInput = (event) => {
        setNewToDo(event.target.value)
    }
    const handleAddToDo = () => {
        setListToDo([...ListToDo, {id: Math.random(), value: newToDo}])
    }
    const handleDeleteToDo = (event) => {
        console.log(event)
        let afterDel = ListToDo.filter(item => item.id !== event);
        setListToDo(afterDel)
    }
    return(
        <>
        <div>To do List</div>
        {ListToDo && ListToDo.length > 0 && ListToDo.map((item, index) => { return(
            <>
            <div key={item.id}>{index+1} - {item.value} <button onClick={()=>handleDeleteToDo(item.id)}>x</button></div>
            
            </>
        )})}
        <div>My to do = {newToDo}</div>
        <input type={'text'} onChange = {(event) => handleChangeInput(event)}></input>
        <button onClick={() => handleAddToDo()}>Add</button>
        </>
    );
}
export default MyComponents