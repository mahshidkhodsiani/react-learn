import React, { useEffect } from 'react';
import axios from "axios";

const BASE_URL = 'https://dummyjson.com';

const AxiosPackage = () => {

    useEffect(() => {
        getData();
    }, []

    );

    const getData = () =>{
        axios.get(`${BASE_URL}/products/2`).then((response) => console.log(response.data))
        .catch((error) => console.log(error.message));
    }

    return (
        <div>

        </div>
    );
}

export default AxiosPackage;