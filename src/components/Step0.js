import React from "react";

import AppButton from "./AppButton";

const Step0 = ({ nextStepClick }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="py-5">
        <img src="/phone.svg" width="120" alt="" />
      </div>
      <div className="text-center pb-5">
        ¡Hola! <br /> ¿Estás buscando un celular pero… <br />
        no sabes cuál es el que más te conviene?
      </div>
      <AppButton onClick={() => nextStepClick()}>
        No te preocupes,
        <br /> te ayudamos
      </AppButton>
    </div>
  );
};

Step0.propTypes = {};

export default Step0;
