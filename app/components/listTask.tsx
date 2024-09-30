'use client'
import React from 'react'
import { TaskValue } from '../interface/task'
import Task from './task'
import FormField from './formField'

export default function TaskList(
  { listTask, deleteTask, handleChangeState, filterTask }
    :
    {
      listTask: TaskValue[],
      deleteTask: (index: number) => void,
      handleChangeState: (index: number) => void,
      filterTask: (e: React.ChangeEvent<HTMLInputElement>) => void
    }) {
  return (
    <div className='flex text-center justify-center py-12'>
      <div className='pt-10 border py-10 px-10 rounded-lg shadow-md'>
        <h1 className=' text-xl bg-green-500 text-white rounded-lg mb-6'>Tareas</h1>
        <div>
          <div className='inline-flex'>
            <FormField
              onChangeInput={filterTask}
              type='text'
              placeholder='Buscar Tarea '
              className='m-3 border-2  p-2 rounded-lg'
            />
          </div>
          <div className='h-96 overflow-auto pb-10'>
            {listTask.length === 0 ? <h1 className='text-xl text-yellow-500 mt-6'>No hay tareas</h1> : null}
            {listTask.map((task: TaskValue, index: number) => (
              <Task
                key={index}
                task={task}
                index={index}
                deleteTask={deleteTask}
                handleChangeState={handleChangeState}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
