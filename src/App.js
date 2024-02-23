import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import DataBarang from './components/Barang/DataBarang';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
          <Navbar/>
          <Dashboard/>
          </>
        }
        />

        <Route path='/barang' element={
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
