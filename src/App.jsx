import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TypingTest from './components/TypingTest/TypingTest';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TypingTest />} />
      </Routes>
    </Router>
  );
}

export default App;
