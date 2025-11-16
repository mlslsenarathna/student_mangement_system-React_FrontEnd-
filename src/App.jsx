import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import AddStudent from './assets/pages/AddStudent.jsx'




function App() {
  const [count, setCount] = useState(0)

  return (<>
    <Router>
      <Routes>
        <Route path='' element={<AddStudent/>}></Route>
        
       
      </Routes>

    </Router>

  </>

  )
}

export default App
