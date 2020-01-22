//Componente: é uma função que retorna algum conteudo html/css/javascript, o qual não interfere no restante da aplicação.
//Estado: informações que um componente PAI passa para o componente FILHO
//Propridade: informações mantidas pelo componente (lembrar: imutabilidade)

import React, {useState} from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  
  return (    
    <div id="app">      
    
      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>
          
          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">

            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>

          <button type="submit">Salvar</button>
          
        </form>
      </aside>
      
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/31074317?s=460&v=4" alt="Emanoel Medeiros"/>
              <div className="user-info">
                <strong>Emanoel Medeiros</strong>
                <span>React Js, React Native, NodeJS</span>
              </div>
            </header>
            <p>Graduating in Information Systems - UFPB</p>
            <a href="https://github.com/emanoelmlsilva">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/31074317?s=460&v=4" alt="Emanoel Medeiros"/>
              <div className="user-info">
                <strong>Emanoel Medeiros</strong>
                <span>React Js, React Native, NodeJS</span>
              </div>
            </header>
            <p>Graduating in Information Systems - UFPB</p>
            <a href="https://github.com/emanoelmlsilva">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/31074317?s=460&v=4" alt="Emanoel Medeiros"/>
              <div className="user-info">
                <strong>Emanoel Medeiros</strong>
                <span>React Js, React Native, NodeJS</span>
              </div>
            </header>
            <p>Graduating in Information Systems - UFPB</p>
            <a href="https://github.com/emanoelmlsilva">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/31074317?s=460&v=4" alt="Emanoel Medeiros"/>
              <div className="user-info">
                <strong>Emanoel Medeiros</strong>
                <span>React Js, React Native, NodeJS</span>
              </div>
            </header>
            <p>Graduating in Information Systems - UFPB</p>
            <a href="https://github.com/emanoelmlsilva">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
