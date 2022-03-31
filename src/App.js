import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from './component/Home';
import '../src/assats/css/timeline.min.css';
import '../src/assats/css/versions.css';
import Footer from './component/Footer'
import './App.css';
import About from './page/About'
import Courses from './page/Courses';
import Blog from './page/Blog';
import Teacthers from './page/Teachers';
import Contact from './page/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/courses' element={<Courses />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/teacters' element={<Teacthers />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        {/* <Home /> */}
        <Footer />
      </BrowserRouter>

     
    </div>
  );
}

export default App;
