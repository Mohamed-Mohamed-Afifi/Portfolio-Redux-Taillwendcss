import React from 'react';
import './App.css';
import './styles/main.css'
// import { Button } from 'reactstrap'
import { Route, Routes } from 'react-router-dom';
import { Home } from './component/pages/Home';
import Products from './component/pages/products';
import Contact from './component/pages/Contact';
import { Login } from './component/pages/registeration/login';
import Protected from './component/pages/protectRoutes/Protected';
import ErrorPage from './component/pages/ErrorPage';
import SingleproductPage from './component/pages/SingleproductPage';
import ForgetPass from './component/pages/registeration/ForgetPass';
import Register from './component/pages/registeration/Regeister';
import { ChangePass } from './component/pages/registeration/ChangePass';
import SharedLayout from './component/pages/Layouts/SharedLayout';
import Settings from './component/pages/protectRoutes/Settings';
import Admin from './component/pages/protectRoutes/Admin';
import Product from './component/subComponent/Product';
const App=()=> {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<SharedLayout/>} />
          <Route path='Products' element={<Products><Product/></Products>} />
          <Route path='Products/:ProductId' element={<SingleproductPage />} />
          <Route path='settings' element={<Admin> <Settings /> </Admin>} />
          <Route path='Contact' element={<Contact />} />
          <Route path='login' element={<Protected><Login /></Protected>}/>
          <Route path='register' element={<Protected><Register /></Protected>}/>
          <Route path='resetPasseord' element={<Protected><ForgetPass /></Protected>}/>
          <Route path='changePassword' element={<Protected><ChangePass /></Protected>}/>
        </Route>
          <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
