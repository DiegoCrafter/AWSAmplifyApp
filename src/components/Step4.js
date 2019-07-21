import React, { useState } from "react";

import AppButton from "./AppButton";
import AppSelect from "./AppSelect";

const Step3 = ({ nextStepClick }) => {
  const [active, setActive] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center pb-5">¿Qué sistema operativo prefieres?</div>
      <AppSelect active={active === 1} onClick={() => setActive(1)}>
        Android
      </AppSelect>
      <AppSelect active={active === 2} onClick={() => setActive(2)}>
        IOS
      </AppSelect>
      <AppSelect active={active === 3} onClick={() => setActive(3)}>
        Cualquiera
      </AppSelect>
      <AppSelect active={active === 4} onClick={() => setActive(4)}>
        No sé qué es eso
      </AppSelect>
      <div className="pt-5">
        <AppButton onClick={() => nextStepClick()}>Continuar</AppButton>
      </div>
    </div>
  );
};

Step3.propTypes = {};

export default Step3;
