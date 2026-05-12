import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  const title = "Welcome to my React app!";
  const tagline = "building great apps with react!";
  const copyright = "© 2026, my app all rights reserved"
  
  return(
    <div className='App'>
      <Header title={title}/>
      <Footer tagline={tagline} copyright={copyright}/>
    </div>
  );
}

export default App;
