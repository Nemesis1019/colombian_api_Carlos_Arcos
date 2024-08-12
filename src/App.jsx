import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'

import { Home,Notfound,Dash_provider,fetchPresidents, dash_context } from './routes'
import './App.css'
import { useContext, useEffect, useState } from 'react';

function App() {


  return (
    <>
    <Dash_provider>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to='/colombia_dash'/>} />
            <Route path='/colombia_dash' element={<Home/>} />
            <Route path='*' element={<Notfound/>} />
          </Routes>
      </BrowserRouter>
    </Dash_provider>
    </>
  )
}

export default App
