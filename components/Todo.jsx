import React, { useEffect } from 'react'
import {CheckOutlined,DeleteOutlined} from '@ant-design/icons'
import { FcOk } from "react-icons/fc";

const Todo = ({id,title,description,mongoId,complete,deleteTodo,completeTodo}) => {
    return (
        
        <tr className="odd:bg-slate-100 even:bg-gray-200 odd:dark:bg-gray-200 even:dark:bg-gray-100">
            <td className="px-3 py-4">
                {id+1}
            </td>
            <td className={`px-3 py-4 ${complete?"line-through":""}`}>
                {title}
            </td>
            <td className={`px-3 py-4 ${complete?"line-through":""}`}>
                {description}
            </td>
            <td className="px-3 py-4 ">
                <span className='flex justify-center'>{complete ? <FcOk className='text-2xl' /> : "Pending"}</span>
            </td>
            <td className="parent px-3 py-4 flex  justify-center gap-3">
                {!complete ? <button onClick={()=>completeTodo(mongoId)} className='completed bg-green-700 text-white px-3 rounded-md py-1'><CheckOutlined /></button> 
                 : ""}
                <button onClick={()=>deleteTodo(mongoId)} className='bg-red-700 text-white px-3 rounded-md py-1'><DeleteOutlined /></button>
            </td>
        </tr>
    )
}

export default Todo