import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import DondeCuando from './DondeCuando';
import ConfirmarAsistencia from './ConfirmarAsistencia';
import Inicio from './Inicio';
import Nosotros from './Nosotros';
import Regalos from './Regalos';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Route path="/inicio" component={Inicio}></Route>
        <Route path="/donde_cuando" component={DondeCuando}></Route>
        <Route path="/confirmar_asistencia" component={ConfirmarAsistencia}></Route>
        <Route path="/nosotros" component={Nosotros}></Route>
        <Route path="/regalos" component={Regalos}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
