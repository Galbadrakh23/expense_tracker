import React from "react";
import css from "./loader.module.css";

const Loader = () => {
  return (
    <div className="mx-auto w-[1216px]">
      <div className={css.loader}></div>
    </div>
  );
};

export default Loader;
