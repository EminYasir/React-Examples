// App.jsx
import { Fragment } from "react";
import TestDisplay from  "./component/TextDisplay"
import "./App.css";


function App() {
  return (
    <Fragment>
      <h1>Learn React</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nostrum
        non voluptatibus ratione reiciendis quae animi voluptas eveniet cum
      </p>
      <TestDisplay />
    </Fragment>
  );
}

export default App;
