import React from "react";

import useArrayState from "../hooks/useArrayState";

import { getDataApp } from "../data/apps";

import AppButton from "./AppButton";
import AppSelect from "./AppSelect";

const Step1 = ({ nextStepClick }) => {
  const [apps, , setApp] = useArrayState(getDataApp());

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center pb-5">
        ¿Para qué lo vas a <br />
        usar principalmente?
      </div>
      <div className="flex justify-center flex-wrap">
        {apps.map((app, index) => (
          <div
            key={app.code}
            className="inline-block m-2"
            style={{ width: 80, height: 80 }}
          >
            <AppSelect
              active={app.active}
              rounded={false}
              style={{ height: "100%" }}
              onClick={() => setApp(index, a => ({ ...a, active: !a.active }))}
            >
              {app.code}
            </AppSelect>
          </div>
        ))}
      </div>
      <div className="pt-5">
        <AppButton onClick={() => nextStepClick()}>Continuar</AppButton>
      </div>
    </div>
  );
};

Step1.propTypes = {};

export default Step1;
