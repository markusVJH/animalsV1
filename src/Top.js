import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import "./Top.css";

const GoTop = (props) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <div className={props.showGoTop} onClick={scrollUp}>
          <button className="goTop">
            <FaAngleUp size="30px" color="rgb(0, 59, 82)" />
          </button>
        </div>
      )}
    </>
  );
};

export default GoTop;
