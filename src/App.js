import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import SignUp from "./views/SignUp"
import SignIn from "./views/SignIn";
import AnimeList from "./views/anime/animeList/AnimeListPage";
import AnimeDetailsPage from "./views/anime/animeDetails/AnimeDetailsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/signin" />
        </Route>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/animes" component={AnimeList}/>
        <Route path="/animesdetails/:id" component={AnimeDetailsPage}/>
      </Switch>
    </Router>
  );
}

export default App;
