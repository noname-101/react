import logo from './logo.svg';
import './App.css';
import FigureList from './components/FigureList';

const App = () => {
  return (
    <div className="app">
      <h1>Dynamic Image Gallery</h1>
      <FigureList />
    </div>
  );
};

export default App;
