import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';




import FillNumber from './page/fill-number';

import PersonRegister from './components/Register';
import './style/style.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<PersonRegister></PersonRegister>}></Route>
      <Route path="fill" element={<FillNumber></FillNumber>}></Route>

    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
