"use client"  //In nextjs this is required for client side
import Todo from "@/components/Todo";
import axios from "axios";
import { useEffect, useState } from "react";

// react npm toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const [formData, setFormData] = useState({
        title: "",
        description: ""
    })
    const [todoData,setTodoData] = useState([]);

    const fetchTodos = async () => {
        const response = await axios('/api')
        setTodoData(response.data.todos)
    }
    useEffect(()=>{
        fetchTodos()
    },[])

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(form => ({ ...form, [name]: value }))
        console.log(formData)
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            //todo posting in DB
            const response = await axios.post('/api', formData);
            toast.success(response.data.msg);
            setFormData({
                title: "",
                description: ""
            })
            fetchTodos()
        } catch (error) {
            toast.error("Something Went Wrong")

        }
    }
    const deleteTodo = async (id) => {
        const response = await axios.delete('/api',{
            params:{
                mongoId:id
            }
        })
        toast.success(response.data.msg);
        fetchTodos();
    }
    const completeTodo = async (id) => {
        const response = await axios.put('/api',{},{
            params:{
                mongoId:id
            }
        })
        toast.success(response.data.msg);
        fetchTodos();
    }
    return (
        <>
            <ToastContainer theme="dark" />
            <form onSubmit={onSubmitHandler} className="flex flex-col items-start gap-2 w-[80%] max-w-[600px] mt-20 px-2 mx-auto">
                <input type="text" name="title" value={formData.title} onChange={onChangeHandler} placeholder="Enter Title" className="px-3 py-2 border-2 w-full" />
                <textarea name="description" value={formData.description} onChange={onChangeHandler} placeholder="Enter Description" className="px-3 py-2 border-2 w-full"></textarea>
                <button type="submit" className="bg-orange-600 py-3 px-11 text-white rounded-2xl">Add Todo</button>
            </form>


            <div className="relative overflow-x-auto sm:rounded-lg">
                <table className="w-[80%] mt-20 mx-auto text-sm text-center rtl:text-right text-gray-800 ">
                    <thead className="text-xs text-white uppercase bg-gray-50 ">
                        <tr className="bg-purple-800">
                            <th scope="col" className="px-3 py-4">
                                ID
                            </th>
                            <th scope="col" className="px-3 py-4">
                                TITLE
                            </th>
                            <th scope="col" className="px-3 py-4">
                                DESCRIPTION
                            </th>
                            <th scope="col" className="px-3 py-4">
                                STATUS
                            </th>
                            <th scope="col" className=" px-3 py-4">
                                ACTIONS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoData.map((item,index)=>{
                            return <Todo key={index} id={index} title={item.title} description={item.description} complete={item.isCompleted} mongoId={item._id} deleteTodo={deleteTodo} completeTodo={completeTodo}  />
                        })}

                    </tbody>
                </table>
            </div>

        </>
    );
}
