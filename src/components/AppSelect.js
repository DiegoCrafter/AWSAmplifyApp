import React from "react";
import classNames from "classnames";

const AppSelect = ({ active, rounded, children, onClick, ...restProps }) => {
  return (
    <div
      className={classNames(
        "w-full text-center cursor-pointer my-1 py-1",
        rounded ? "rounded-full" : "",
        active ? "bg-darkblue" : "bg-softwhite"
      )}
      onClick={() => onClick()}
      {...restProps}
    >
      {children}
    </div>
  );
};

AppSelect.defaultProps = {
  rounded: true
};

export default AppSelect;
