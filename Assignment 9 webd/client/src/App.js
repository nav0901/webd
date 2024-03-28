import Login from "./Pages/Login";
import Home from './Pages/Home'
import About from './Pages/About'
import Jobs from './Pages/Jobs'
import Contact from './Pages/Contact'
import './Styles/MainStyles.scss';
import {Routes,Route } from 'react-router-dom' 
import NavMenu from "./Components/NavMenu/NavMenu";


function App() {
  return (
    <div className="App">
    <NavMenu/>
    <Routes>
        <Route path="/" exact element={<Login/>} />

        <Route path="/auth" element={<Home/>} />

        <Route path="/auth/about" element={<About/>} />

        <Route path="/auth/jobs" element={<Jobs/>} />

        <Route path="/auth/contact" element={<Contact/>} />
    </Routes>
    </div>
  );
}

export default App;
