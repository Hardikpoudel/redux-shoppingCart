import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
