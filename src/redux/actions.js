import { add_todo_error, add_todo_loading, add_todo_success, edit_todo, get_todo_error, get_todo_loading, get_todo_success } from "./constant"

export const addSuccess=(data)=>{
    console.log(data)
    return{
        type:add_todo_success,
        payload:data
    }
}
export const addError=(data)=>{
    return {
        type:add_todo_error,
        payload:data
    }
}
export const addLoading=()=>{
   return { type:add_todo_loading}
}

export const getSuccess=(data)=>{
    return {
        type:get_todo_success,
        payload:data
    }
}
export const getError=(data)=>{
    return{
        type:get_todo_error,
        payload:data
    }
}
export const getLoading=()=>{
    return {
        type:get_todo_loading,

    }
}
export const edit=(data)=>{
return {
    type:edit_todo,
    payload:data
}
}