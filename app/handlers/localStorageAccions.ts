import { TaskValue } from "../interface/task"

export function getTaskStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    return tasks
}

export function AddTaskStorage(tasks:TaskValue | TaskValue[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks) || '[]')
}