import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import DataBarang from './components/Barang/DataBarang';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={
          <>
          <Navbar/>
          <Dashboard/>
          </>
        }
        />

        <Route path='/' element={
          <>
          <Navbar/>
          <DataBarang/>
          </>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
