import React, { useState } from 'react'
import { removeTodo, updateTodo } from '../store/TodoSlice'
import { useDispatch } from 'react-redux'

export default function TodosForm({todo}) {

    let [msg,setMsg] = useState(todo.todo)
    let [isEdit,setIsEdit] = useState(false)
    let dispatch = useDispatch()

    let edit = (id)=>{
      // console.log(id)
      // console.log(msg)
      dispatch(updateTodo({id,msg}))
      setIsEdit(false)
    }
    
    return (
      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg text-white`}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              readOnly={!isEdit}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  
                  if (isEdit) {
                      edit(todo.id);
                  } else setIsEdit((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isEdit ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => dispatch(removeTodo(todo.id))}
          >
              ❌
          </button>
      </div>
  );
}
