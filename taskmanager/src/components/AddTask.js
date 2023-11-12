import React, { useState } from 'react';

const AddTask = () => {
    const [taskValue, setTaskValue] = useState("")
    // const handleChange=(event)=>{
    //     setTaskValue(event.target.value);
    // } ****Minified version is given bellow:

    const handleReset = () =>{
        setTaskValue("");

    }
    return (
       <section className='addTask'>
            <form>
                <input onChange={(e)=>setTaskValue(e.target.value)} type="text" name="task" id="task" placeholder='Task Name ' autoComplete='off' value={taskValue} />
                <button type='submit'>Add Task</button>
                <span onClick={handleReset} className='reset'> Reset </span>
            </form>
            <p>{taskValue}</p>
       </section>
    );
};

export default AddTask;