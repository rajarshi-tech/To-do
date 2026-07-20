export type TaskStatus = "pending" | "completed" | "deleted";

export type Task = {
  id: string;
  task: string;
  date: string;
  time: string;
  status: TaskStatus;
}

export type Tasks = {
  tasks: Task[];
};