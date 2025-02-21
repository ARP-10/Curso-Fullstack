import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ArmaList from "./components/ArmaList";
import NpcList from "./components/NpcList";
import ArmaduraList from "./components/ArmaduraList";

function App() {
  return (
    <div className="App">
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            {/* FIXME: Cambiar todos los button del navBar por 'a' - links, sino no se ve bien en bootstrap*/}
            <button className="navbar-brand" href="#">
              Navbar
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <button className="nav-link active" aria-current="page" href="#">
                    Home
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" href="#">
                    Features
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" href="#">
                    Pricing
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="secciones">
        <h1>Lista de NPC</h1>
        <NpcList />
        <h1>Lista de Armas</h1>
        <ArmaList />
        <h1>Lista de Amraduras</h1>
        <ArmaduraList />
      </div>
    </div>
  );
}

export default App;
