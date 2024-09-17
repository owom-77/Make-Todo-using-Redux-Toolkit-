import React, { useState } from 'react'
import { addTodo } from '../store/TodoSlice'
import { useDispatch } from 'react-redux'

export default function AddTodo() {

    let [todo, setTodo] = useState('')
    let dispatch = useDispatch()

    let submitHandle = (e) => {
        e.preventDefault();

        if (!todo) return;

        dispatch(addTodo(todo))
        setTodo('')
    }

    return (
        <>

            <form onSubmit={submitHandle} className="space-x-3 mt-12 flex justify-between">
                <input
                    type="text"
                    className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out basis-10/12"
                    placeholder="Enter a Todo..."
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg basis-1/5"
                >
                    Add
                </button>
            </form>

        </>
    )
}
