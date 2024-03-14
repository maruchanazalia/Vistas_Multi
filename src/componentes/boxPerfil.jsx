import React, { useState } from 'react';
import '../style/boxPerfil.css';

export default function BoxPerfil() {
  const [showProjetos, setShowProjetos] = useState(false);

  const toggleProjetos = () => {
    setShowProjetos(!showProjetos);
  };

  return (
    <div className="container">
      <header className="perfil">
        <img className="perfil-foto" src="https://github.com/rafaballerini.png" alt="Perfil" />
        <div className="titulo">
          <h1>Azalia Ruiz</h1>
          <h3>Banda 223241</h3>
        </div>
      </header>

      <button class="button-57" onClick={toggleProjetos} role="button"><span class="text"> Datos </span><span>press me</span></button>
  

      {showProjetos && (
        <main className="projetos">
          <ul>
            <li>
              <a>🔢 Conversor de moeda</a>
            </li>
            <li>
              <a>🎬 Aluraflix</a>
            </li>
          </ul>
        </main>
      )}
    </div>
  );
}
