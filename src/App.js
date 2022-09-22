import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Disc from './Disc';
import Logistics from './Logistics';
import Insights from './Insights';
import Spons from './Spons';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Disc/>
      <Logistics/>
      <Insights/>
      <Spons/>
      <Footer/>
    </div>
  );
}

export default App;
