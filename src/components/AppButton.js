import React from "react";

const AppButton = ({ children, onClick }) => {
  return (
    <div
      className="text-center text-white bg-purple rounded-full font-bold cursor-pointer px-6 py-2"
      onClick={() => onClick()}
    >
      <div className="px-6">{children}</div>
    </div>
  );
};

AppButton.propTypes = {};

export default AppButton;
