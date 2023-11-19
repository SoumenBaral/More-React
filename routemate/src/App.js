import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Header></Header>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
