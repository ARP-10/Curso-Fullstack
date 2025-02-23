import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css";
import ArmaList from "./components/ArmaList";
import NpcList from "./components/NpcList";
import ArmaduraList from "./components/ArmaduraList";
import BiomaList from "./components/BiomaList";
import BossList from "./components/BossList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
      <div className="App">
        {/* Menu */}
        <NavBar />

        {/* Rutas */}
        <Routes>
          {/*<Route path="/" element={<Home />} />*/}
          <Route path="/npc" element={<NpcList />} />
          <Route path="/armaduras" element={<ArmaduraList />} />
          <Route path="/armas" element={<ArmaList />} />
          <Route path="/bosses" element={<BossList />} />
          <Route path="/biomas" element={<BiomaList />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
      


    </div>

  );
}

export default App;
