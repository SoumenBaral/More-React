import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const prams = useParams()
    console.log(prams);
    return (
        <div className='component'>
            <h1>Please before you enter please Know about me ..</h1>
            <p>ID : {prams.id}</p>
        </div>
    );
};

export default ProductDetails;