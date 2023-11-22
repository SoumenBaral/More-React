import React from 'react';
import { useNavigate ,Outlet} from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const handleSubmit =()=>{
        return navigate('/')
      
    }
    return (
        <div className='component'>
            <h1>I Will contact with you don't worry </h1>
      
            <button onClick={handleSubmit}>Back to home </button>
            <Outlet/>
        </div>
    );
};

export default Contact;