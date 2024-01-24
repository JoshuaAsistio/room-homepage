import React from "react";
import SkipToMain from "./components/SkipToMain";
import Top from "./components/Top";
import Bottom from "./components/Bottom";

const App = () => {
  return (
    <div>
      {/* skip to main link */}
      <SkipToMain />

      {/* navigation bar and main content */}
      <Top />

      {/* about our furniture */}
      <Bottom />
    </div>
  );
};

export default App;
