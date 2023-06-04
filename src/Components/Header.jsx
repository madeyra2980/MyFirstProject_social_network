import React from "react";
import AndroidImg from "../img/android-svgrepo-com.svg";

const Header = () => {
  return (
    <div className="header"> {/* Добавлен класс header */}
      <header>
        <img src={AndroidImg} alt="android" />
      </header>
    </div>
  );
};

export default Header;
