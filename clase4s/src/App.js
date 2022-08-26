import satisfied from './assets/img/satisfied.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Hombre-satisfecho">
        <img src={satisfied} className="Hombre-satisfecho" alt="figura-hombre" />
        <h1>
          Hombre satisfecho
        </h1>
      </div>
    </div>
  );
}

export default App;
