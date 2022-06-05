// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignUpFormPage from "./components/SignUpFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Playlists from "./components/Playlists";
import Songs from "./components/Songs"
import Home from "./components/Home/index ";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUpFormPage />
          </Route>
          <Route path="/playlists">
            <Playlists />
          </Route>
          <Route path="/songs">
            <Songs />
          </Route>
          
        </Switch>
      )}
    </>
  );
}

export default App;