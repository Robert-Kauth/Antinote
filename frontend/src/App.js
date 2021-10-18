import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import SignupFormModal from "./components/SignupFormModal";
import { Route } from "react-router-dom";
import NoteBooks from "./components/Notebooks";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div>
      <div className="globalWrapper">
        <Navigation isLoaded={isLoaded} />
        <Route exact path="/">
          {!sessionUser && <SignupFormModal />}
          {sessionUser && <Home user={sessionUser} />}
        </Route>
        <Route path="/notebooks/:id">
          <NoteBooks> </NoteBooks>
        </Route>
      </div>
      <Footer />
    </div>
  );
}

export default App;
