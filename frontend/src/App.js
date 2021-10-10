import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import SignupFormModal from "./components/SignupFormModal";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
    <div>
      <nav className="appContainer">
        <Navigation isLoaded={isLoaded} />
      </nav>
      {isLoaded ? <Home /> : <SignupFormModal />}
    </div>
  );
}

export default App;
