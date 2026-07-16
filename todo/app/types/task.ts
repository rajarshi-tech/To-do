export type Task = {
  id: string;
  task: string;
  date: string;
  time: string;
  status: string;
}

export type Tasks = {
  tasks: Task[];
};