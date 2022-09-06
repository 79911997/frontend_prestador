import Pessoa from './components/pessoa/Pessoa'
import Servico from './components/servico/Servico'
import Header from './components/template/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/template/Banner';
import Pesquisa from './components/template/Pesquisa';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <Outlet/>
      
    </div>
  );
}

export default App;
