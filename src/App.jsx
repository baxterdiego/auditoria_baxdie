import "./App.css";

import Resumen from "./components/Resumen";
import InyeccionSQL from "./components/InyeccionSQL";
import XSS from "./components/XSS";
import Comandos from "./components/Comandos";
import Activos from "./components/Activos";
import Matriz from "./components/Matriz";
import Controles from "./components/Controles";
import Recuperacion from "./components/Recuperacion";
import Prompts from "./components/Prompts";

function App() {
  return (
    <div>
      <header className="hero">
        <h1>Auditoría de Seguridad</h1>

        <h2>MercadoSur - E-Commerce</h2>

        <p>
          Evaluación de vulnerabilidades,
          análisis de riesgos y propuestas
          de mitigación.
        </p>
      </header>

      <main className="contenido">
        <Resumen />
        <InyeccionSQL />
        <XSS />
        <Comandos />
        <Activos />
        <Matriz />
        <Controles />
        <Recuperacion />
        <Prompts />
      </main>
    </div>
  );
}

export default App;