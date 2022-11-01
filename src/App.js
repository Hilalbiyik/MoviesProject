import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Movies from "./pages/Movies/Movies";
import Home from "./pages/Home/Home";
import Series from "./pages/Series/Series";
import Trends from "./pages/Trends/Trends";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/movies" component={Movies} />
          <Route  path="/series" component={Series} />
          <Route  path="/trends" component={Trends} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
