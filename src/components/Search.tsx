import { useState } from "react";
interface SearchProps {
  onSearch: (text: string) => void;
}
function Search({ onSearch }: SearchProps) {
  const [query, setQuery] = useState<string>("");
  const handleChangeQuery = (text: string) => {
    setQuery(text);
    onSearch(text);
  };
  return (
    <form>
      <input
        style={{ width: "60%" }}
        type="search"
        name="search"
        id="search"
        aria-label="escriba su búsqueda"
        placeholder="texto a buscar..."
        value={query}
        onChange={e => handleChangeQuery(e.target.value)}
      />
    </form>
  );
}

export default Search;
