import { useTask } from "../context/TaskContext";
import Task from "./Task";
import TaskMobile from "./TaskMobile";

type TasksProps = {
  filter: string;
};

export default function Tasks({ filter }: TasksProps) {
  const { tasks } = useTask();
  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.status === filter);
  return (
    <div>
      {filteredTasks.map((task) => (
        <>
          <div className="hidden md:block mb-1">
            <Task key={task.id} task={task} />
          </div>

          <div className="block md:hidden mb-1">
            <TaskMobile key={task.id} task={task} />
          </div>
        </>
      ))}
    </div>
  );
}
