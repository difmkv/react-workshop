import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PuppiesContainer from "./containers/PuppiesContainer";
import Puppy from "./components/Puppy";

const App = () => (
  <div>
    <h1>Puppies</h1>
    <Router>
      <Switch>
        <Route path="/puppy/:id">
          <Puppy />
        </Route>
        <Route path="/">
          <PuppiesContainer />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
