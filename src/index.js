import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(<h1> Hello world!</h1>, document.getElementById("root"));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
