import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar';
import Carusel from './Components/Carusel/Carusel';
import Catalog from './Components/Carusel/Catalog';
import Sale from './Components/Block/Sale';
import Offer from './Components/Block/Offer';
import Popcontain from './Components/Block/Popcontain';
import Card from './Components/Card/Card';
import Index from './Components/Card/Index';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Carusel/>
      <Catalog/>
      <Sale/>
      <Offer/>
      <Popcontain/>
    </div>
  );
}

export default App;
