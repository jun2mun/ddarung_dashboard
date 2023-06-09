import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


//ReactDOM.render(<App />, document.getElementById("web")); Node 16 이하

ReactDOM.createRoot(document.getElementById("web")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);