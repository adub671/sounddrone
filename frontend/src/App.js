// // frontend/src/App.js
// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import LoginFormPage from './components/LoginFormPage/index.js';


// function App() {
//   return (
//     <Switch>
//       <Route exact path="/">
//         <div>hello</div>
//       </Route>
//       <Route path="/login">
//         <LoginFormPage />
//       </Route>
//     </Switch>
//   );
// }

// export default App;

// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";

function App() {
  
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  console.log('app')

  return isLoaded && (
    <Switch>
      <Route exact path="/">
        <div>hello</div>
      </Route>
      <Route path="/login">
        <LoginFormPage />
      </Route>
    </Switch>
  );
}

export default App;