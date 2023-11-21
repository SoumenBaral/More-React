import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const ProductsList = () => {
    const [searchParams] = useSearchParams()
    console.log(searchParams.get("keyword"));

    // If any thing in the link we can get it via searchparams 
    const location = useLocation();
    console.log(location);

    // Location will give you everything that SearchParams can .
    // searchparams have some limitation but location will provide ?, hash , all query that you want
    

    return (
        <div className='component'>
            <h1>Hi ProductsList</h1>
        </div>
    );
};

export default ProductsList;