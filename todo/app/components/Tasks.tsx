import { useTask } from "../context/TaskContext";
import Task from "./Task";

type TasksProps = {
  filter: string;
};

export default function Tasks({ filter }: TasksProps) {
  const { tasks } = useTask();
  const filteredTasks =
    filter === "all"
      ? tasks.tasks
      : tasks.tasks.filter(task => task.status === filter);
  return (
    <div>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />))}
    </div>
  );
}
