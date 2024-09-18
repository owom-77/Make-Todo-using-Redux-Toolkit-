import React, { useEffect } from 'react'
import { useState } from 'react'
import {addTodo} from '../store/TodoSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function AddTodo() {

    //let todos = useSelector((state)=>state.todos)

    let [msg,setMsg] = useState('')
    let dispatch = useDispatch()

    let add = ()=>{
        if(!msg) return;

        dispatch(addTodo(msg))
        setMsg('')
    }

    return (
        <form onSubmit ={(e)=>{
            e.preventDefault();
            add();
        }}className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={msg}
                onChange={(e)=>setMsg(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}
