import { add_todo_error, add_todo_loading, add_todo_success, edit_todo, get_todo_error, get_todo_loading, get_todo_success } from "./constant";

const init={loading:false,todo:[],error:false};
export const reducer=(state=init, {type,payload})=>{
    switch(type){
        case add_todo_loading:
          return  {...state,loading:true}
        case add_todo_success:
           
             return {...state,todo:[...state.todo,payload], loading:false}
        case add_todo_error:
            return {...state,error:true,loading:false}
        case get_todo_success:
            return {...state,todo:payload,loading:false}
        case get_todo_error:
            return {...state, error:true,loading:false}
        case get_todo_loading:
            return {...state,loading:true}
        case edit_todo:
          return {...state, todo:{...state.todo,status:!state.todo.status}};
                    
        default:return state
    }
}