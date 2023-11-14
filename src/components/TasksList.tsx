import { iTask } from "../tasks/iTask";
import { RiDeleteBin6Line } from "react-icons/ri";
interface TaskListProps {
  tasks: iTask[] | undefined;
  onDelete: (id: string) => void;
}
function TasksList({ tasks, onDelete }: TaskListProps) {
  return (
    tasks && (
      <section>
        <ul>
          {tasks.map((t: iTask) => (
            <li
              key={t.id}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>
                {t.id} - {t.description}
              </span>
              {t.isCompleted ? "done" : "pending"}

              <RiDeleteBin6Line onClick={() => onDelete(t.id)} />
            </li>
          ))}
        </ul>
      </section>
    )
  );
}

export default TasksList;
