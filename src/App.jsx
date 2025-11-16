import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import AddStudent from './assets/pages/AddStudent.jsx'
import UpdateStudent from './assets/pages/UpdateStudent.jsx'




function App() {
  const [count, setCount] = useState(0)

  return (<>
    <Router>
      <Routes>
        <Route path='' element={<AddStudent/>}></Route>
        <Route path='update' element={<UpdateStudent/>}></Route>
        
       
      </Routes>

    </Router>

  </>

  )
}

export default App
