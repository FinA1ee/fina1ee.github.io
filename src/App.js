import "./App.css";
import MainBody from "./components/MainBody";
import NavBar from "./components/navbar/NavBar";
import FooterBar from "./components/footerbar/FooterBar";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  const subPages = [
    { key: 0, name: "HOME", link: "/homepage", hash: "#/main/homepage" },
    { key: 1, name: "RESUME", link: "/resume", hash: "#/main/resume" },
    { key: 2, name: "PROJECTS", link: "/projects", hash: "#/main/projects" },
    { key: 3, name: "CONTACT", link: "/contact", hash: "#/main/contact" },
  ];

  return (
    <div className="App">
      <Router basename="/main">
        <Route render={() => <NavBar navItems={subPages} />}></Route>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/homepage"></Redirect>}
          ></Route>

          <Route
            path="/resume"
            render={() => <MainBody displayContent="resume" />}
          ></Route>

          <Route
            path="/projects"
            render={() => <MainBody displayContent="project" />}
          ></Route>

          <Route
            path="/contact"
            render={() => <MainBody displayContent="contact" />}
          ></Route>

          <Route render={() => <MainBody displayContent="homepage" />}></Route>
        </Switch>
        <Route render={() => <FooterBar />}></Route>
      </Router>
    </div>
  );
}

export default App;
