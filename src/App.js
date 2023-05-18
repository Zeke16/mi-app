import "./App.css";
import { Testimonio } from "./components/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Testimonios de nuestros trabajadores</h1>
        <Testimonio
          nombre="Shawn Wang "
          pais="Singapore"
          imagen="1"
          cargo="Software Engineer"
          empresa="Amazon"
          testimonio="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        />
        <Testimonio
          nombre="Zeke"
          pais="Singapore"
          imagen="1"
          cargo="Software Engineer"
          empresa="Amazon"
          testimonio="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        />
      </div>
    </div>
  );
}

export default App;
