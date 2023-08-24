import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
  useParams
}
from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Clothes from './pages/Clothes';
import Bills from './pages/Bills';
import Scholarship from './pages/Scholarship';
import Detail from './components/Detail';
import './App.css';
import Checkout from './pages/Checkout';
import ManageBill from './pages/ManageBill';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/clothes' element={<Clothes/>}/>
      <Route path='/bills' element={<Bills/>}/>
      <Route path='/bills/manage' element={<ManageBill />}/>
      <Route path='/bills/:postId' element={<Detail/>}/>
      <Route path='/clothes/:postId' element={<Detail/>}/>
      <Route path='/scholarship' element={<Scholarship/>}/>
    </Route>
  )
)

function App() {

  return (
      <RouterProvider router={router}/>
);
}

export default App;
