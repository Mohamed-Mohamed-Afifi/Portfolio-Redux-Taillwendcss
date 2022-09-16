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
import Singleproduct from './component/pages/Singleproduct';
import ForgetPass from './component/pages/registeration/ForgetPass';
import Register from './component/pages/registeration/Regeister';
import { ChangePass } from './component/pages/registeration/ChangePass';
import SharedLayout from './component/pages/Layouts/SharedLayout';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Protected><Home /></Protected>}>
          <Route index element={<SharedLayout/>} />
          <Route path='Products' element={<Products />} />
          <Route path='Products/:ProductId' element={<Singleproduct />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Register />}/>
          <Route path='resetPasseord' element={<ForgetPass />}/>
          <Route path='changePassword' element={<ChangePass />}/>
        </Route>
          <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
