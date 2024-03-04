

import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About'
import Book from './Book'
import Order from './Order';
import Contact from './Contact';
import Data from './Forms/Data';


function App() {
  return (
    <div>
      <Navbar />
      <video style={{ height: "850px" }} src='Book video.mp4' controls autoPlay />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='book' element={<Book/>}/>
        <Route path='order' element={<Order/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='data' element={<Data/>}/>
        <Route path='data' element={<Data/>}/>
        <Route path='data' element={<Data/>}/>
        <Route path='data' element={<Data/>}/>
        <Route path='data' element={<Data/>}/>
        
        

      </Routes>



    </div>
  );
}

export default App;
