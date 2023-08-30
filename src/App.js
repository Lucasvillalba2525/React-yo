import './App.css';
import {Routes , Route } from "react-router-dom";
import Footer from './components/public/Footer';
import Header from './components/public/Header';
import Main from './components/public/Main';
import Detail from './components/public/Detail';
import { UserFrom } from './components/public/UserForm';






function App() {
  return (
    <div>
      {/*
       ---HEADER---
      md proyecto && cd proyecto && md assets && cd assets && md css, pages, js && cd css && type nul > style.css && cd .. && cd js && type nul > script.js

Augusto Simón Sosa 6:34 PM
FOR /L %%parameter IN (start,step,end) D
 for /l %A in (1,1,20) do type nul > script%A.js
 */}
      <Header />
      <Routes>
        <Route exact path={"/"} element={<Main />}/>
        <Route path={"/detail/:id"} element={<Detail />}/>
        <Route path={"/user-form"} element={<UserFrom />}/>
      </Routes>
      {/* ---MAIN--- */}
      {/* <Main /> */}
      {/* ---FOOTER--- */}
      <Footer />
    </div>

  );
}

export default App;
