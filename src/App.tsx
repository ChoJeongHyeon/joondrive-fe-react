import './App.css'
import {Route, Routes} from "react-router-dom"
import LoginPage from './login/LoginPage'

function App() {
  return (
    <>
      <Routes>
        <Route path = 'login' element = {<LoginPage/>}></Route>
        
      </Routes>
    </>
  )
}

export default App
