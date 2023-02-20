import { HashRouter } from "react-router-dom"
import Navbar from './components/Navbar';
import TodoApp from './components/TodoApp';
import './styles/app.css';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <TodoApp />
      </HashRouter>
    </>
  );
}

export default App;
