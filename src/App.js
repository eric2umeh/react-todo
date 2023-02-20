import { BrowserRouter as Router } from "react-router-dom"
import Navbar from './components/Navbar';
import TodoApp from './components/TodoApp';
import './styles/app.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <TodoApp />
      </Router>
    </>
  );
}

export default App;
