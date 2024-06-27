import React from 'react'
import {CheckOutlined,DeleteOutlined} from '@ant-design/icons'

const Todo = ({id,title,description,mongoId,complete}) => {
    return (
        <tr className="odd:bg-slate-100 even:bg-gray-200 odd:dark:bg-gray-200 even:dark:bg-gray-100">
            <td className="px-6 py-4">
                {id+1}
            </td>
            <td className="px-6 py-4">
                {title}
            </td>
            <td className="px-6 py-4">
                {description}
            </td>
            <td className="px-6 py-4">
                {complete ? "Completed" : "Pending"}
            </td>
            <td className="px-6 py-4 flex gap-3">
                <button className='bg-green-700 text-white px-4 rounded-md py-1'><CheckOutlined /></button>
                <button className='bg-red-700 text-white px-4 rounded-md py-1'><DeleteOutlined /></button>
            </td>
        </tr>
    )
}

export default Todo