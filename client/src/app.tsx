import * as React from "react";
import * as ReactDOM from "react-dom";
import ProgressionTable from "./components/ProgressionTable";

const App = (): JSX.Element => (
  <>
    <ProgressionTable />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'))