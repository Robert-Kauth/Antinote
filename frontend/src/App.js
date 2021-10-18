import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import SignupFormModal from "./components/SignupFormModal";
<<<<<<< HEAD
import { Route } from "react-router";
=======
import { Switch, Route } from "react-router-dom";
import NoteBooks from "./components/Notebooks";
>>>>>>> reducer
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
<<<<<<< HEAD
      </div>
=======
        <Route path="/notebooks/:id">
          <NoteBooks> </NoteBooks>
        </Route>
      </Switch>
>>>>>>> reducer
      <Footer />
    </div>
  );
}

export default App;
