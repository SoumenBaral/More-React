import React, { useState } from 'react';

const AddTask = ({tasks,setTasks}) => {
    const [taskValue, setTaskValue] = useState("")
    const [progress,setProgress] = useState(false)
    // const handleChange=(event)=>{
    //     setTaskValue(event.target.value);
    // } ****Minified version is given bellow:

    const handleReset = () =>{
        setTaskValue("");
        setProgress(false)

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const task  ={
            id: Math.floor(Math.random()*10000),
            name : taskValue,
            completed:Boolean(progress)
        }
        console.log(task);
        setTasks([...tasks,task])
        handleReset();
    }
    return (
       <section className='addTask'>
            <form>
                <input onChange={(e)=>setTaskValue(e.target.value)} type="text" name="task" id="task" placeholder='Task Name ' autoComplete='off' value={taskValue} />
                <select onChange={(event)=>setProgress(event.target.value)} value={progress}>
                    <option value={false}>pending</option>
                    <option value={true}>completed</option>
                </select>
                <span onClick={handleReset} className='reset'> Reset </span>
                <button onClick={handleSubmit} type='submit'>Add Task</button>
                
            </form>
            <p>{taskValue}</p>
       </section>
    );
};

export default AddTask;