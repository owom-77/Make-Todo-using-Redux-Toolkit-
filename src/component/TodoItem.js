import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo,deleteTodo } from '../store/TodoSlice'

export default function TodoItem({todo}) {

    let [msg,setMsg] = useState(todo.msg)
    let dispatch = useDispatch()
    let [isEdit,setEdit] = useState(false)

    let edit = (todo)=>{
        dispatch(updateTodo({todo,msg}))
        setEdit(false)
    }
    
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black`}
        >
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg text-white`}
                value={msg}
                onChange={(e)=>setMsg(e.target.value)}
                readOnly = {!isEdit}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={()=>{
                    if(isEdit){
                        edit(todo.id)
                    }else{
                        setEdit((prev)=>!prev)
                    }
                }}
            >
                {isEdit ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={()=>dispatch(deleteTodo(todo.id))}   
            >
                ❌
            </button>
        </div>
    );
}
