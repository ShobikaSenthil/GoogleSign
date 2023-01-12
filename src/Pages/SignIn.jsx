import React, { useContext} from "react";
import { ContextElement} from "../Routing";
import Home from "./Home";

const Signin = () => {
  const { handleClick } = useContext(ContextElement);
  const { user } = useContext(ContextElement);
  const {isClick}=useContext(ContextElement);

  return (
    <>
      {user && isClick ? (
        <>
          <Home />
        </>
      ) : (
        <div>
          <h1>Sign in</h1>
          <div>
            <button onClick={handleClick}>Sign In</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Signin;
