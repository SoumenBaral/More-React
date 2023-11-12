import React from 'react';

const AddTask = () => {
    return (
       <section className='addTask'>
            <form>
                <input type="text" name="task" id="task" placeholder='Task Name ' autoComplete='off' />
                <button type='submit'>Add Task</button>

            </form>
       </section>
    );
};

export default AddTask;