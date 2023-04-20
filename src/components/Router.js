import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import TodoList from './TodoList';
import NotFound from './NotFound';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
