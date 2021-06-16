import "./Container.css";
import "./Body.css";
import { useState, useEffect } from "react";
import Users from "../components/Users.js";
import User from "../components/User.js";
import DoesNotExist from "../components/DoesNotExist.js";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function Home() {
  const [state, setState] = useState({ loading: true, array: [] });

  useEffect(() => {
    setState({ loading: true, array: [] });
    const apiLink = "https://randomuser.me/api/?page=3&results=10&seed=abc";
    axios
      .get(apiLink)
      .then((user) => setState({ loading: true, array: user.data.results }))
      .catch((error) => console.log(error));
  }, [setState]);

  const listUsers = state.array.map((user, index) => (
    <Users key={index} user={user} />
  ));
  return (
    <div className="App">
      <header as="h3"> User Info</header>
      <div className="body">
        <Router>
          <Switch>
            {" "}
            <div className="cards">
              <Route
                exact
                path="/userdetail"
                render={() => <Redirect to="/" />}
              />
              <Route exact path="/">
                {listUsers}
              </Route>
              <Route
                exact
                path="/user/:name"
                render={(props) => <User {...props} state={state} />}
              ></Route>
              <Route exact path="/user" component={DoesNotExist}></Route>{" "}
            </div>
          </Switch>
        </Router>
      </div>
      <footer>
        <div> David Perekopskiy{"  "}</div>
        <a href="https://www.linkedin.com/in/david-perekopskiy-1694971a0/">
          Linkedin
        </a>
      </footer>
    </div>
  );
}

export default Home;
