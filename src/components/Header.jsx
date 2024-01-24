import React from "react";

import roomLogo from "../images/logo.svg";
import arrowLeft from "../images/icon-angle-left.svg";
import arrowRight from "../images/icon-angle-right.svg";
import menuButton from "../images/icon-hamburger.svg";
import closeMenu from "../images/icon-close.svg";

const Header = ({ step, setStep }) => {
  const [showNavigation, setShowNavigation] = React.useState(false);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") setShowNavigation(true);
    else if (e.key === "Escape") setShowNavigation(false);
  });

  const goBack = () => {
    setStep((prevStep) => (prevStep === 1 ? 3 : --prevStep));
  };

  const goNext = () => {
    setStep((prevStep) => (prevStep === 3 ? 1 : ++prevStep));
  };

  return (
    <header
      className={
        step === 1
          ? "header header-1"
          : step === 2
          ? "header header-2"
          : "header header-3"
      }
    >
      <nav className="navigation">
        <button
          className="menu-button"
          onClick={() => {
            setShowNavigation(true);
          }}
        >
          <img src={menuButton} alt="" />
        </button>

        <a href="#">
          <img src={roomLogo} alt="" />
        </a>

        <div
          className={
            showNavigation ? "dark-background" : "dark-background hide"
          }
        >
          <button className="close" onClick={() => setShowNavigation(false)}>
            <img src={closeMenu} alt="" />
          </button>

          <ul className="links-list">
            <li>
              <a href="#" className="links">
                home
              </a>
              <p className="underline"></p>
            </li>
            <li>
              <a href="#" className="links">
                shop
              </a>

              <p className="underline"></p>
            </li>
            <li>
              <a href="#" className="links">
                about
              </a>

              <p className="underline"></p>
            </li>
            <li>
              <a href="#" className="links">
                contact
              </a>

              <p className="underline"></p>
            </li>
          </ul>
        </div>
      </nav>

      <div className="switchers">
        <button onClick={() => goBack()} aria-label="back button">
          <img src={arrowLeft} alt="arrow pointing left" />
        </button>
        <button onClick={() => goNext()} aria-label="next button">
          <img src={arrowRight} alt="arrow pointing right" />
        </button>
      </div>
    </header>
  );
};

export default Header;
