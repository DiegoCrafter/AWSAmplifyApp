import React, { useState } from "react";

import AppButton from "./AppButton";
import AppSelect from "./AppSelect";

const Step3 = ({ nextStepClick }) => {
  const [active, setActive] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center pb-5">
        ¿Con qué frecuencia <br />
        estás dispuesto a recargar <br />
        la batería de tu celular? <br />
        Sé sincero
      </div>
      <AppSelect active={active === 0} onClick={() => setActive(0)}>
        Más de una vez al día
      </AppSelect>
      <AppSelect active={active === 1} onClick={() => setActive(1)}>
        Una vez al día
      </AppSelect>
      <AppSelect active={active === 2} onClick={() => setActive(2)}>
        Más de una vez al día
      </AppSelect>
      <div className="pt-5">
        <AppButton onClick={() => nextStepClick()}>Continuar</AppButton>
      </div>
    </div>
  );
};

Step3.propTypes = {};

export default Step3;
