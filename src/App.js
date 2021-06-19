import React from "react";
import "./App.css";
import { useStateValue } from "./StateProvider";
import Login from "./Login";
import Header from "./Header";
import Feed from "./Feed";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Feed />
            {/*sidebar*/}
            {/*widgets*/}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
