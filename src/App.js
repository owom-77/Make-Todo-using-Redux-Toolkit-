import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AddTodo from './component/AddTodo';
import TodoItem from './component/TodoItem';
import { useEffect } from 'react';
import { addTodo } from './store/TodoSlice';

function App() {

    let todos = useSelector((state)=>state.todos)
    let dispatch = useDispatch()

    useEffect(()=>{
        let todo = JSON.parse(localStorage.getItem("todos"))
        if(todo.length > 0){
            todo.map((val)=>{
                console.log(val)
                dispatch(addTodo(val.msg))
            })
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    //console.log(todos)
  
  return (
    
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Todo with Redux Toolkit</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <AddTodo/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((val)=>(
                            <div key={val.id}>
                                <TodoItem todo = {val}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
  )
}

export default App;
