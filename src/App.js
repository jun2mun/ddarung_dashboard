import React from "react";
import { BrowserRouter,  Route ,Routes} from "react-router-dom";
import Home from "./routes/Home";
import Graph from "./routes/Graph";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

/* deprecated react 16 under //
function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/Graph" component={Graph} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/test-page" component={test_page} />
    </BrowserRouter>
  );
}
*/
function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/Graph" element={<Graph/>} />
        <Route path="/movie/:id" element={<Detail/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;