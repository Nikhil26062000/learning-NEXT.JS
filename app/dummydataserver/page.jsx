
import React from 'react'

const DummyDataServer =async () => {

    const fetchdata = async()=>{
        let data = await fetch("https://jsonplaceholder.typicode.com/posts")

        data = await data.json()
        return data;
    }

    let products =await fetchdata();
    //console.log(products);

  return (
    <div>
    <h1>This is data render in server component</h1>
       {
        products?.map((p)=>{
            return <li key={p.id} className="border m-2 p-2 bg-green-300 text-white">{p.id}{p.title}</li>
        })
       }
    </div>
  )
}

export default DummyDataServer