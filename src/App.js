import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

export default function App() {
   return (
      <Router>
         <div className="App">
            <Switch>
               <Route exact path="/" component={SignUp} />
               <Route path="/login" component={Login} />
            </Switch>
         </div>
      </Router>
   );
}
