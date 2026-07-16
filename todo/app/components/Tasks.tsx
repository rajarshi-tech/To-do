import { useTask } from "../context/TaskContext";
import Task from "./Task";

export default function Tasks() {
  const { tasks } = useTask();
  return (
    <div>
      {tasks.tasks.map(task => (
        <Task key={task.id} task={task} />))}
    </div>
  );
}
