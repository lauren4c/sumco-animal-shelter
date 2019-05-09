import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/partials/header";
import Footer from "./components/partials/footer";
import Landing from "./components/landing";
import Adopt from "./components/adopt";
import SignUp from "./components/sign_up";
import SignIn from "./components/sign_in";
import Animal from "./components/animal";
import NewAnimal from "./components/new_animal";
import EditAnimal from "./components/edit_animal";
import HappyTails from "./components/happy_tails";
import PendingAdoptions from "./components/pending";

import { AuthContext } from "./Auth";

class App extends Component {
  static contextType = AuthContext;

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Route exact path="/" component={Landing} />
            <Route exact path="/adopt" component={Adopt} />
            <Route exact path="/adopt/:id" component={Animal} />
            <Route path="/sign_in" component={SignIn} />
            <Route path="/happy_tails" component={HappyTails} />
            <Route path="/pending" component={PendingAdoptions} />
            <Route path="/sign_up" component={SignUp} />
            <Route path="/new_animal" component={NewAnimal} />
            <Route exact path="/adopt/:id/edit" component={EditAnimal} />
          </main>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
