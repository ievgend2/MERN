import React from 'react';
import { useRoutes } from '../../constants/routes';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const routes = useRoutes(false)
  return (
    <Router>
      <div className="App">
        {/* <Navigation/> */}
        <div>{routes}</div>
      </div>
    </Router>
  );
}

export default App
