import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import SignupFormModal from "./components/SignupFormModal";
import { Switch, Route } from "react-router";
import NoteBooks from "./components/Notebooks";
import Notes from "./components/Notes";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const currentUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        {!currentUser && <SignupFormModal />}
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/notebooks">
          <NoteBooks> </NoteBooks>
        </Route>
        <Route path="/notes">
          <Notes></Notes>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
