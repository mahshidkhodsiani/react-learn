import React, { useEffect } from 'react';
import axios from "axios";

const BASE_URL = 'https://dummyjson.com';
const BASE_URL2 = 'https://jsonplaceholder.typicode.com/posts/1';
const fakeData ={title : "mahshid", description: "khodsiani", price : 123};

const AxiosPackage = () => {

    useEffect(() => {
        getData();
        // postData(fakeData);
        // deleteData(2);
    }, []

    );

    const getData = () =>{
        axios.get(`${BASE_URL}/products/1`).
        then((response) => console.log(response.data))
        .catch((error) => console.log(error.message));
    };

    const postData = (data) =>{
        axios.post(`${BASE_URL}/products/add` , data).
        then((response) => console.log(response.data))
        .catch((error) => console.log(error.message));
    };

    const deleteData = (id) =>{
        axios.delete(`${BASE_URL}/products/${id}`).
        then((response) => console.log(response.data))
        .catch((error) => console.log(error.message));
    };

    const updatePutData = (id, data) =>{
        axios.put(`${BASE_URL}/products/${id}`, data).
        then((response) => console.log(response.data))
        .catch((error) => console.log(error.message));
    };

    const updatePatchData = (id, data) =>{
        axios.patch(`${BASE_URL}/products/${id}`, data).
        then((response) => console.log(response.data))
        .catch((error) => console.log(error.message));
    };

    return (
        <div>
            <button onClick={() => updatePutData(1 , fakeData)} >PUT DATA</button>
            <button onClick={() => updatePatchData(1 , fakeData)}>PATCH DATA</button>
        </div>
    );
}

export default AxiosPackage;