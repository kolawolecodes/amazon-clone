import React from 'react';
import './App.css';
import Header from "./components/Header";
import Header2 from "./Header2";
import CheckOut from './components/CheckOut';
import LogIn  from './LogIn';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Home";
//  import DropdownAll from "./components/DropdownAll";
import TestDownContextProvider from './components/TestDownContext';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<>
          <Header/>
          <TestDownContextProvider>
            <Header2/>
            {/* <DropdownAll/> */}
          </TestDownContextProvider>
          <Home/>
          <Footer/>
          </>} />
          <Route path='/LogIn' element={<LogIn/>} />
          {/* <Route path='/DropdownAll' element={<DropdownAll/>} /> */}
          <Route path='/CheckOut' element={<><Header/><CheckOut/></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
