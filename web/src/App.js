//Componente: é uma função que retorna algum conteudo html/css/javascript, o qual não interfere no restante da aplicação.
//Estado: informações que um componente PAI passa para o componente FILHO
//Propridade: informações mantidas pelo componente (lembrar: imutabilidade)

import React, {useState, useEffect} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() {
  const [devs,setDevs] = useState([]);

  useEffect(() => {
    async function loandDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loandDevs();
  },[])

  async function handleAddDev(data){    

    const response = await api.post('/devs',data);

    setDevs([...devs, response.data]);
  }
  
  return (    
    <div id="app">      
    
      <aside>
        <strong>Cadastrar</strong>
        <DevForm aonSubmit={handleAddDev}/>
      </aside>
      
      <main>
        <ul>
          {devs.map((dev) => (
            <DevItem key={dev._id} dev={dev}/>
          ))}           
        </ul>
      </main>
    </div>
  );
}

export default App;
