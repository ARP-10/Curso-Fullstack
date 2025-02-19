import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TituloSeccion from './components/TituloSeccion';
import './styles/TituloSeccion.css';

function App() {
  return (
    <div className="App">
      <h1>Noticias web</h1>
      {/* NavBar */}
      <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {/* TODO: Poner los links correctos */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tecnología</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Salud</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Entretenimiento</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ciencia</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sección noticias */}
      <div>
        <TituloSeccion texto='Tecnología'></TituloSeccion>
      </div>

      <div>
        <TituloSeccion texto='Salud'></TituloSeccion>
      </div>

      <div>
        <TituloSeccion texto='Entretenimiento'></TituloSeccion>
      </div>

      <div>
        <TituloSeccion texto='Ciencia'></TituloSeccion>
      </div>

    </div>
  );
}

export default App;
