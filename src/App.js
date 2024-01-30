
import Posts from "./Posts";

import React, { useEffect, useState } from "react";



const BASE_URL = "https://jsonplaceholder.typicode.com";
const HEADERS = { "content-type": "application/json" };

const App = () => {

  const [arrayData, setArrayData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`${BASE_URL}/posts/`, {
      method: "GET",
      headers: HEADERS,
    })
      .then((response) => response.json())
      .then((data) => setArrayData(data))
      .catch((error) => console.error(error.message));
  };

  const postData = (data) => {
    fetch(`${BASE_URL}/posts/`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error.message));
  };

  const updateDate = (data, id) => {
    //https://jsonplaceholder.typicode.com/posts/1
    fetch(`${BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: HEADERS,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error.message));
  };

  const deleteData = (id) => {
    fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
      headers: HEADERS,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error.message));
  };

  const fetchHandler = (event) => {
    switch (event.target.name) {
      case "get":
        getData();
        break;
      case "send":
        postData({ title: "mahshid", body: "test body", userId: 125 });
        break;
      case "update":
        updateDate(
          { title: "mahshid 2", body: "test body 2", userId: 1245 },
          1
        );
        break;
      case "delete":
        deleteData(1);
        break;

      default:
        break;
    }
  };

  return (
    <>
      {arrayData &&
        arrayData.map(element => <Posts key={element.id} data={element} /> )
      }

    </>
  );
};

export default App;
