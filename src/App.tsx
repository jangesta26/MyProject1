import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Register } from './Pages/Register';
import { Main } from './Pages/Main';
import { ButtonFooter } from './Components/ButtonFooter';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/home" element={<Main/>}/>
          <Route path="/register" element={<Register/>}/>
          </Routes>
        <ButtonFooter/>
      </Router>

    </>
  )
}

export default App;