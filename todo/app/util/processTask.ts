import type { Task } from "../types/task";


export default function processTask(task: string, dateTime: string): Task {
  const date: string = dateTime.split("T")[0];
  const time: string = dateTime.split("T")[1];

  const taskObject: Task = {
    id: crypto.randomUUID(),
    task,
    date,
    time,
    status: "pending"
  }

  return taskObject;
}