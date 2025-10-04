import { useState } from 'react'
import './App.css'
import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Home from '../components/Home'
import Identitical from '../components/identitical'
// import Gymlist from '../components/allGyms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/gymnastic' element={<Home/>}></Route>
          <Route path='/basic' element={<Identitical/>}></Route>
          {/* <Route path='/gymnastic/allgyms' element={Gymlist}></Route> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
