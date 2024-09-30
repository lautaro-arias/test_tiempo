"use client";
import React, { useEffect, useState } from "react";
import { AddTaskStorage, getTaskStorage } from "./localStorageAccions";
import { TaskValue } from "../interface/task";

export default function useTaskController() {
  const [task, setTask] = useState("");
  const [state] = useState(false);
  const [listTask, setListTask] = useState<TaskValue[]>([]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleChangeState = (index: number) => {
    listTask[index].state = !listTask[index].state;
    AddTaskStorage(listTask);
    setListTask(getTaskStorage());
  };

  const addNewTask = () => {
    if(task === "" ) return alert("No hay tarea para agregar");
    
    const storageTasks = getTaskStorage();

    AddTaskStorage([...storageTasks, { task: task, state: state }]);
    setTask("");
    setListTask(getTaskStorage());
  };

  const deleteTask = (index: number) => {
    listTask.splice(index, 1);

    AddTaskStorage(listTask);
    setListTask(getTaskStorage());
  };

  const filterTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") return setListTask(getTaskStorage());

    const value = e.target.value
    setListTask(listTask.filter((item) => item.task.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
  };

  useEffect(() => {
    setListTask(getTaskStorage());
  }, []);

  return {
    task,
    state,
    listTask,
    handleChangeInput,
    handleChangeState,
    addNewTask,
    deleteTask,
    filterTask
  };
}
