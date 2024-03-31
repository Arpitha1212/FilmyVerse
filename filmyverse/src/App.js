import Header from "./Components/Header";
import Cards from "./Components/Cards";
import AddMovie from "./Components/AddMovie"
import  { Route, Routes } from 'react-router-dom'
import Detail from  './Components/Detail'
import { createContext, useState } from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const Appstate = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userName,setUserName] = useState("");



  return (
    <Appstate.Provider value={{login,userName,setLogin,setUserName}}>

    <div className="App relative">
    <Header/>
    <Routes>
    <Route path="/" element={<Cards/>}></Route>
    <Route path="/addmovie" element={<AddMovie/>}
    ></Route>
    <Route path="/detail/:id" element={<Detail/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate}
