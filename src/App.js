import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import  "./App.css";

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route path='/About' component={About} />
          <Route path="/Services" component={Services} />
          <Route path="/Contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
