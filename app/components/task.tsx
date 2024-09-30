import React from 'react'
import { TaskValue } from '../interface/task'
import FormField from './formField'

export default function Task(
  { task, index, deleteTask, handleChangeState }
    :
    {
      task: TaskValue,
      index: number,
      deleteTask: (index: number) => void,
      handleChangeState: (index: number) => void
    }) {
  return (
    <div className='border shadow-lg rounded-lg mt-5  justify-center mx-auto'>
      <div key={index} className='inline-flex p-2'>
        <FormField
          checked={task.state}
          type='checkbox'
          onChangeInput={() => handleChangeState(index)}
          className='p-1'
        />
        <h1 className={task.state ? 'line-through ml-12 text-lg mt-1 bg-green-500 rounded-md text-white' : ' text-lg ml-12 mt-1'}>{task.task}</h1>
        <button onClick={() => deleteTask(index)} className='text-white ml-12 btn bg-red-600 p-2 rounded-md '>Delete</button>
      </div>
      <div className=''>
        {task.state ?
          <small className=' text-green-500'>Terminada</small>
          :
          null
        }
      </div>
    </div>
  )
}