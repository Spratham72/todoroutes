import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addError, addLoading, addSuccess, getError, getLoading, getSuccess } from "../redux/actions";

export const Input=()=>{
    const complete=useSelector(state=>state);
   const data=complete.todo;
   console.log(complete)
    const dispatch=useDispatch();
    const [value,setValue]=useState("");
    const inputValue=(e)=>{
        setValue(e.target.value);
    }
    const handleClick=(e)=>{
        dispatch(addLoading())
      fetch("http://localhost:3004/todo",
      {
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({title:value, status:false})
          
      }).then((res)=>res.json()).then(res=>dispatch(addSuccess(res))).catch(er=>dispatch(addError(er)))
      getData();
    }
  useEffect(()=>{
            getData()
    },[])
    const getData=()=>{
        dispatch(getLoading());
        fetch("http://localhost:3004/todo").then(res=>res.json()).then(res=>dispatch(getSuccess(res))).catch(er=>dispatch(getError()));
    }
   
    return (    
        <>
        {complete.loading?<div>Loading.....</div>:<div>
            <input type="text" placeholder="Enter Todo Item" onChange={inputValue} />
            <button onClick={handleClick}>Add Todo</button>
            {data.map(el=><Link to={`/edit/${el.id}`}><div id={el.id}>
               
                <p>{el.title}</p>
                <p>{el.status}</p>
            </div></Link>)}
        </div>}
        
        </>
    )
}