import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Signin from "./Pages/SignIn";
import { createContext, useState } from "react";
import { AuthContext } from "./Pages/AuthContext";
import { auth } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const ContextElement = createContext(null);
const ProviderElem = ContextElement.Provider;

const Routing =()=>
{
  const [user] = useAuthState(auth);
  const [isClick, setIsClick] = useState(false);
  console.log(user);

  const handleClick = async () => {
    const result = await AuthContext();
    setIsClick(true);
    if (result) {
      console.log("login");
    } else {
      console.log("err");
    }
  };
    return(
        <ProviderElem value={{ handleClick, user ,isClick}}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Signin/>}></Route>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            
        </Routes>
        </BrowserRouter>
        </ProviderElem>
    )
}
export default Routing;