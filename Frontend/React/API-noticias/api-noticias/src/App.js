import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TituloSeccion from './components/TituloSeccion';
import './styles/TituloSeccion.css';
import Noticias from './components/Noticias';
import Titulo from './assets/Titulo.jpg';

function App() {
  return (
    <div className="App">
      <img src={Titulo} alt='Noticias 24/7' style={{ width: '300px', height: 'auto' }} />
      {/* NavBar */}
      <nav className="navbar navbar-light">
        <div className="container-fluid justify-content-center">
          <ul className="navbar-nav flex-row flex-wrap justify-content-center">
            <li className="nav-item mx-2">
              <a className="nav-link active fw-bold" aria-current="page" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fw-bold" href="#tecnologia">Tecnología</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fw-bold" href="#salud">Salud</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fw-bold" href="#entretenimiento">Entretenimiento</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fw-bold" href="#ciencia">Ciencia</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sección noticias */}
      <div id="inicio" className='mt-3'>
        <h2>Inicio</h2>
        <p>Bienvenido a la página de noticias.</p>
      </div>

      <div id="tecnologia">
        <TituloSeccion texto="Tecnología" />
        <div>
          <Noticias category="technology" />
        </div>
      </div>

      <div id="salud">
        <TituloSeccion texto="Salud" />
        <div>
          <Noticias category="health" />
        </div>
      </div>

      <div id="entretenimiento">
        <TituloSeccion texto="Entretenimiento" />
        <div>
          <Noticias category="entertainment" />
        </div>
      </div>

      <div id="ciencia">
        <TituloSeccion texto="Ciencia" />
        <div>
          <Noticias category="science" />
        </div>
      </div>
    </div>
  );
}

export default App;
