import React, { Suspense } from "react";
import config from "./config/data.json";
import configParser from "./helper/config-parser";

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>{configParser(config)}</Suspense>
  );
}

export default App;
