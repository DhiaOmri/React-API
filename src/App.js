import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./components/User";
import UserListe from "./components/UserListe";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <UserListe
              loading={loading}
              setLoading={setLoading}
              error={error}
              setError={setError}
            />
          </Route>
          <Route path="/users/:id">
            <User
              loading={loading}
              setLoading={setLoading}
              error={error}
              setError={setError}
            />
          </Route>
          <Route
            path="*"
            render={() => {
              return (
                <div className="container py-5">
                  <div className="alert alert-danger">Page Not Found</div>
                </div>
              );
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
