import React, { useState } from "react";

import AppButton from "./AppButton";
import AppSelect from "./AppSelect";

const Step2 = ({ nextStepClick }) => {
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  const [select4, setSelect4] = useState(false);
  const [select5, setSelect5] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center pb-5">
        ¿Para qué lo vas a <br />
        usar principalmente?
      </div>
      <AppSelect active={select1} onClick={() => setSelect1(v => !v)}>
        Llamadas y mensajes
      </AppSelect>
      <AppSelect active={select2} onClick={() => setSelect2(v => !v)}>
        Redes Sociales
      </AppSelect>
      <AppSelect active={select3} onClick={() => setSelect3(v => !v)}>
        Juegos
      </AppSelect>
      <AppSelect active={select4} onClick={() => setSelect4(v => !v)}>
        Geolocalización
      </AppSelect>
      <AppSelect active={select5} onClick={() => setSelect5(v => !v)}>
        Fotografía
      </AppSelect>
      <div className="pt-5">
        <AppButton onClick={() => nextStepClick()}>Continuar</AppButton>
      </div>
    </div>
  );
};

Step2.propTypes = {};

export default Step2;
