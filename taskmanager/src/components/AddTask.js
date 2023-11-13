import React, { useRef, useState } from 'react';
const AddTask = ({tasks,setTasks}) => {
    const [progress,setProgress] = useState(false)
    const taskRef = useRef("")

    const handleReset = () =>{
        taskRef.current.value = ""
        setProgress(false)
       

    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const task  ={
            id: Math.floor(Math.random()*10000),
            name : taskRef.current.value,
            completed:Boolean(progress)
        }
        console.log(task);
        setTasks([...tasks,task])
        handleReset();
    }
    return (
       <section className='addTask'>
            <form>
                <input  type="text" name="task" id="task" placeholder='Task Name ' autoComplete='off' ref={taskRef} />
                <select onChange={(event)=>setProgress(event.target.value)} value={progress}>
                    <option value={false}>pending</option>
                    <option value={true}>completed</option>
                </select>
                <span onClick={handleReset} className='reset'> Reset </span>
                <button onClick={handleSubmit} type='submit'>Add Task</button>
                
            </form>
            
       </section>
    );
};

export default AddTask;