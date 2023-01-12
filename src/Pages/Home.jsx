import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextElement } from "../Routing";

const Home =() =>
{
    const {user} = useContext(ContextElement);
    return(
        <div>
            <h1>Hi {user.displayName}</h1>
            <Link to="/About">About</Link>
        </div>
       
    )
}
export default Home;