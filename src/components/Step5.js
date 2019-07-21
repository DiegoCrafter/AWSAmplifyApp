import React, { useState } from "react";

import AppButton from "./AppButton";
import AppSelect from "./AppSelect";

const Step3 = ({ nextStepClick }) => {
  const [active, setActive] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center pb-5">
        ¿Qué tamaño de celular <br />
        te acomoda más?
      </div>
      <div className="flex justify-center flex-wrap">
        <div className="p-2 mx-2" style={{ width: 100, height: 120 }}>
          <AppSelect
            rounded={false}
            active={active === 0}
            onClick={() => setActive(0)}
            style={{ height: "100%" }}
          >
            <div className="flex items-center justify-center h-full">
              <img src="/phoneSize1.svg" alt="" />
            </div>
          </AppSelect>
        </div>
        <div className="p-2 mx-2" style={{ width: 100, height: 120 }}>
          <AppSelect
            rounded={false}
            active={active === 1}
            onClick={() => setActive(1)}
            style={{ height: "100%" }}
          >
            <div className="flex items-center justify-center h-full">
              <img src="/phoneSize2.svg" alt="" />
            </div>
          </AppSelect>
        </div>
        <div className="p-2 mx-2" style={{ width: 100, height: 120 }}>
          <AppSelect
            rounded={false}
            active={active === 2}
            onClick={() => setActive(2)}
            style={{ height: "100%" }}
          >
            <div className="flex items-center justify-center h-full">
              <img src="/phoneSize3.svg" alt="" />
            </div>
          </AppSelect>
        </div>
      </div>
      <div className="pt-5">
        <AppButton onClick={() => nextStepClick()}>Continuar</AppButton>
      </div>
    </div>
  );
};

Step3.propTypes = {};

export default Step3;
