import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList";
import './App.css';
import AddTask from "./components/AddTask";

function App() {

  return (
    <div className="App">
      <Header />
      <AddTask/>
      <TaskList />
      <Footer />
    </div>
  );
}

export default App;