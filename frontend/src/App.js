import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import SignupFormModal from "./components/SignupFormModal";
import { Switch, Route } from "react-router";
import NoteBooks from "./components/Notebooks";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route exact path="/">
          {!sessionUser && <SignupFormModal />}
          {sessionUser && <Home />}
        </Route>
        <Route path="/notebooks/:id">
          <NoteBooks> </NoteBooks>
        </Route>
        <Route path="/notes">
          <Notes></Notes>
        </Route>
        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
