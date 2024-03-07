import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Education from "./pages/Education.js";
import Jobs from "./pages/Jobs.js";
import Contact from "./pages/Contact.js";
import './stylesheets/home.css';
import './stylesheets/header-footer.css'
import './stylesheets/courosel.css'
import './stylesheets/education-jobs.css'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='/jobs' element={<Jobs />}></Route>
            <Route path='/education' element={<Education />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>

        <Footer/>
    </div>
  );
}

export default App;
