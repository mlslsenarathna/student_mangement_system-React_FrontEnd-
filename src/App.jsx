import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import AddStudent from './assets/pages/AddStudent.jsx'
import UpdateStudent from './assets/pages/UpdateStudent.jsx'
import DeleteStudent from './assets/pages/DeleteStudent.jsx'
import VeiwStudents from './assets/pages/VeiwStudents.jsx'








function App() {
  const [count, setCount] = useState(0)

  return (<>
    <Router>
      <Routes>
        <Route path='' element={<AddStudent/>}></Route>
       
        <Route path='/update' element={<UpdateStudent/>}></Route>
        <Route path='/delete' element={<DeleteStudent/>}></Route>
         <Route path='/add' element={<AddStudent/>}></Route>
         <Route path='/view' element={<VeiwStudents/>}></Route>
        
       
      </Routes>

    </Router>

  </>

  )
}

export default App
