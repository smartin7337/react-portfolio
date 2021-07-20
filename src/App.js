import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import TheNavBar from "./components/navbar/theNavBar";
import AboutMe from "./pages/aboutme";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";

function App() {
  return (
    <Router>
      <TheNavBar />
      <Switch>
        <Route exact path="/">
          <AboutMe />
        </Route>

        <Route path="/portfolio">
          <Portfolio />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/resume">
          <Resume />
        </Route>

        <Route path="*">
          <AboutMe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
