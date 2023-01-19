// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById('root'));



//ReactDOM.render is no longer supported in React 18. So now it should be 
// use this way...

import { createRoot } from 'react-dom/client';
import App from './components/App';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);