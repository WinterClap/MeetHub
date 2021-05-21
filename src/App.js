import "./App.css";
import { AppContainer } from "./Components/appContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "./Components/signinForm";
import { SignUp } from "./Components/signupForm";
import { Home } from "./Components/Home/homePage";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/signin">
          <SignIn> </SignIn>
        </Route>
        <Route path="/signup">
          <SignUp> </SignUp>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
