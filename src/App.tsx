import { Route, Routes} from 'react-router-dom';
import { ProductsList } from './sections/products/ProductsList';
import { Layout } from './pages/Layout';
import { NotFound } from './pages/NotFound';
import { Login } from './pages/Login';
import { NavBar } from './components/NavBar';

function App() {
  return (
  <>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='login' element={<Login/>} />
        <Route path='home' element={<ProductsList/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>      
  </>
  )
}

export default App
