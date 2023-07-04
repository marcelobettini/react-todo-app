import { useState } from "react";
import Input from "./components/Input";
import Search from "./components/Search";
import { iTask } from "./tasks/iTask";
import TasksList from "./components/TasksList";
function App() {
  const [tasks, setTasks] = useState<iTask[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<iTask[]>([]);
  const handleAddTask = (description: string) => {
    const id: number = !tasks?.length ? 1 : tasks[tasks.length - 1].id + 1;
    const newTask: iTask = {
      id,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setFilteredTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id: number) => {
    const remainingTasks = tasks.filter(t => t.id !== id);
    setTasks([...remainingTasks]);
    setFilteredTasks({ ...remainingTasks });
  };

  const handleSearch = (query: string) => {
    const filteredTasks = tasks.filter(t =>
      t.description.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
    setFilteredTasks(filteredTasks);
  };
  return (
    <main className="container">
      <Search onSearch={query => handleSearch(query)} />
      <Input onAddTask={(text: string) => handleAddTask(text)} />
      <TasksList tasks={filteredTasks} onDelete={id => handleDeleteTask(id)} />
    </main>
  );
}

export default App;
