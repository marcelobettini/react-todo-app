import { useState, useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Input from "./components/Input";
import Search from "./components/Search";
import { iTask } from "./tasks/iTask";
import TasksList from "./components/TasksList";

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks");
  const [filteredTasks, setFilteredTasks] = useState<iTask[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const handleAddTask = (description: string) => {
    const id: string = self.crypto.randomUUID();
    const newTask: iTask = {
      id,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setFilteredTasks([...filteredTasks, newTask]);
  };

  const handleDeleteTask = (id: string) => {
    const remainingTasks = tasks.filter(t => t.id !== id);
    setTasks([...remainingTasks]);
    setFilteredTasks(
      [...remainingTasks].filter(t =>
        t.description
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase())
      )
    );
  };

  const handleSearch = (query: string) => {
    const filteredTasks = tasks.filter(t =>
      t.description.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
    setFilteredTasks(filteredTasks);
    setSearchQuery(query);
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
