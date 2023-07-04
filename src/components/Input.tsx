import { FormEvent, InvalidEvent } from "react";

interface InputProps {
  onAddTask: (text: string) => void;
}
function Input({ onAddTask }: InputProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormData = new FormData(e.target as HTMLFormElement);
    const description: string | undefined = formData.get("input")?.toString();
    onAddTask(description || "");
    (e.target as HTMLFormElement).reset();
  };
  const handleEmpty = (e: InvalidEvent<HTMLInputElement>) => {
    (e.target as HTMLInputElement).setCustomValidity(
      "El campo no puede estar vacío 😡"
    );
  };
  const handleResetEmpty = (e: InvalidEvent<HTMLInputElement>) => {
    (e.target as HTMLInputElement).setCustomValidity("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{ width: "60%" }}
        type="text"
        name="input"
        id="input"
        aria-label="descripción de la tarea"
        placeholder="Comprar pan, estudiar React..."
        required
        onInvalid={handleEmpty}
        onInput={handleResetEmpty}
      />
      <input type="submit" value="enviar" />
    </form>
  );
}

export default Input;
