import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Info from './components/info';
import NavBarExample from './layouts/navbar';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={ <NavBarExample />}>
        <Route index element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='info' element={<Info/>} />
        <Route path='*' element={<Navigate raplace to="/" />}/>


      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
