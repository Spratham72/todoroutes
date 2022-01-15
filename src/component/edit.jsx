import { getElementError } from "@testing-library/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { edit, getError, getLoading, getSuccess } from "../redux/actions";




export const Edit=()=>{
    const dispatch=useDispatch();
    const complete =useSelector(state=>state);
    const data=complete.todo;
    console.log(complete)
    let id=useParams();
    useEffect(()=>{
        getData()
    },[]);
    const getData=()=>{
        dispatch(getLoading())
        console.log(id)
        return fetch(`http://localhost:3004/todo/${id.id}`).then(res=>res.json()).then(res=>dispatch(getSuccess(res))).catch(er=>dispatch(getError(er)));
    }
    const change=()=>{
        dispatch(edit(id.id));
    }
    return <>
    { 
      complete.loading?<div>Loading.....</div>:<div>
            <b>Title: </b>{data.title} <b>Status</b> {data.status?"True":"False"}
            <button style={{margin:"5%"}} onClick={change}>Edit</button>
        </div>
    }
    </>
}