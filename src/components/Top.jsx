import React from "react";

import Header from "./Header";
import Main from "./Main";

const Top = () => {
  const [step, setStep] = React.useState(1);
  return (
    <div className="top">
      <Header step={step} setStep={setStep} />
      <Main step={step} />
    </div>
  );
};

export default Top;
