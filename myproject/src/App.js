import Navbar from './components/Navbar';
import Home from './components/Home';
import Bloglist from './components/Bloglist';
import State from './components/State'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
      <Home/>
      <State/>
    </div>
    </div>
  );
}

export default App;
