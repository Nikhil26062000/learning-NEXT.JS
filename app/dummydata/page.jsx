"use client";

import React from "react";
import { useEffect, useState } from "react";

const DummyData = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      data = await data.json();
      console.log(data);
      setJsonData(data);
      
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>
        This is dummy data page
        {jsonData?.map((ele) => {
          return (
            <li key={ele.id} className="border m-2 p-2 list-none">
              {ele.id} : {ele.title}
            </li>
          );
        })}
      </h1>
    </div>
  );
};

export default DummyData;
