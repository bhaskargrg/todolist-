import React, { useState } from 'react'

function Page() {
    const [task, setTask] = useState("");
    const [des, setDes] = useState("");
    const [final, setFinal] = useState([]);
    const submit=(e)=>{
        e.preventDefault();
        setFinal([...final,{task,des}]);
        setTask("");
        setDes("");
    }
    const deleteHanlde=(i)=>{
        let copyTask=[...final];
        copyTask.splice(i,1);
        setFinal(copyTask);
    }
      let renderTask = <h1>No task available</h1>;
      
    if(final.length>0){
        renderTask = final.map((e, i) => {
          return (
            <li key={i} className="flex justify-between px-5 mb-5 items-center">
                {i+1}
              <div className="flex justify-between w-2/3 items-center">
                <h3>{e.task}</h3>
                <h5>{e.des}</h5>
              </div>
              <button  onClick={()=>{deleteHanlde(i);}} className='bg-red-400 rounded px-4 py-1'>Delete</button>
            </li>
          );
        });

    }
    
  return (
    <div>
      <h1 className="text-4xl bg-black font-bold text-center text-white py-3">
        Bhaskar todo list
      </h1>
      <form onSubmit={submit} className="mb-3">
        <input
          type="text"
          className="border-zinc-400 rounded border-2 px-10 py-1 mt-3"
          placeholder="Enter the task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <input
          type="text"
          className="border-zinc-400 rounded border-2 px-10 py-1 mt-3 ml-10"
          placeholder="Enter the task ml"
          value={des}
          onChange={(e) => {
            setDes(e.target.value);
          }}
        />
        <button className="border-1 bg-black text-white rounded px-3 py-1 ml-7   text-2xl">
          Done
        </button>
      </form>
      <hr />
      <div className="bg-slate-300 px-2 py-4 mt-3 text-2xl">
        <ul>
          <li>{renderTask}</li>
          
        </ul>
      </div>
    </div>
  );
}

export default Page