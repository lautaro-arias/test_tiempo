'use client'
import React from 'react'
import useTaskController from '../handlers/taskController'
import TaskList from './listTask'
import FormField from './formField'

export default function AddNewTask() {

    const {
        task,
        handleChangeInput,
        addNewTask,
        listTask,
        deleteTask,
        handleChangeState,
        filterTask

    } = useTaskController()

    return (
        <div className='flex-wrap  justify-center mx-auto'>
            <div className='pt-10 text-center'>
                <h1 className='text-xl'>Escribe una nueva Tarea</h1>
                <FormField
                    maxLeght={50}
                    value={task}
                    onChangeInput={handleChangeInput}
                    type='text'
                    placeholder='Nueva Tarea'
                    className=' mt-8 border p-2 rounded-lg'
                />
                <button onClick={addNewTask} className='m-3 border bg-green-500 text-white p-2 rounded-lg'>Agregar</button>
            </div>
            <TaskList
                listTask={listTask}
                deleteTask={deleteTask}
                handleChangeState={handleChangeState}
                filterTask={filterTask}
            />
        </div>
    )
}
