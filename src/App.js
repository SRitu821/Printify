import './App.css';
import NavBar from './components/Navbar/navbar';
import Banner from './components/Banner/banner';
import Features from './components/features/features';
import Working from './components/HowItWorks/working';
import Connect from './components/connect/connect';
import Sales from './components/sales/sales';
import Social from './components/social-proof/social';

function App() {
  return (
    <div className="App">
      
      <div>
        <div><NavBar /></div>
        <div><Banner /></div>
        <div><Features /></div>
        <div><Working /></div>
        <div><Connect /></div>
        <div><Sales /></div>
        <div><Social /></div>

      </div>
    </div>
  );
}

export default App;
