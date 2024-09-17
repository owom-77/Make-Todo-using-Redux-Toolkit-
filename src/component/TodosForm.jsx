import React, { useState } from 'react'
import { removeTodo, updateTodo } from '../store/TodoSlice'
import { useDispatch } from 'react-redux'

export default function TodosForm({todo}) {

    let [msg,setMsg] = useState(todo.todo)
    let [isEdit,setIsEdit] = useState(false)
    let dispatch = useDispatch()

    let edit = ()=>{
      dispatch(updateTodo(todo.id,msg))
      setIsEdit(false)
    }
    
    return (
      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black`}
      >
          <input
              className={`border outline-none w-full bg-transparent rounded-lg text-white
                `}
              type = 'text'
              value={msg}
              onChange={(e)=>setMsg(e.target.value)}
              readOnly = {!isEdit}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={()=>{
                if(isEdit){
                  edit()
                }else{
                  setIsEdit((prev)=>!prev)
                }
              }}
          >
           
              {isEdit ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={()=>dispatch(removeTodo(todo.id))}
          >
              ❌
          </button>
      </div>
  );
}
