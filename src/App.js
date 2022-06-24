import "./App.css";
import Todo from "./components/Todo";

// Advantage of Redux over contextAPI

// performance
// single source of truth :- everything in one place
// immutability of store :- cant change the values or store , we can chnage entire store while updatig

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
