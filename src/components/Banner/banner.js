import styles from "./banner.module.css";
import { IoMdCheckmark } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";
import React, { useState } from "react";

const logos = [
  require("../../components/photoes/tshirt.png"),
  // "../../photoes/tshirt.png",
  // "/logos/logo2.png",
  // "/logos/logo3.png",
];

const Banner = () => {
  const [currentLogo, setCurrentLogo] = useState(logos[0]);

  const handleHover = () => {
    const nextLogoIndex = (logos.indexOf(currentLogo) + 1) % logos.length;
    setCurrentLogo(logos[nextLogoIndex]);
  };

  return (
    <div className={styles.main_banner}>
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerDescription}>
          <h1>Create and sell custom products</h1>
          <ul className={styles.bannerAdv}>
            <li>
              <span>
                <IoMdCheckmark className={styles.IoMdCheckmark} />
              </span>
              <span className={styles.advantages}>100% Free to use</span>
            </li>
            <li>
              <span>
                <IoMdCheckmark className={styles.IoMdCheckmark} />
              </span>
              <span className={styles.advantages}>
                900+ High-Quality Products
              </span>
            </li>
            <li>
              <span>
                <IoMdCheckmark className={styles.IoMdCheckmark} />
              </span>
              <span className={styles.advantages}>
                Largest global print network
              </span>
            </li>
          </ul>
          <div className={styles.bannerNavigation}>
            <a>
              <button className={styles.primaryBtn}>Start for free</button>
            </a>
            <button className={styles.secondaryBtn}>
              <span className={styles.secondaryBtnIcon}>
                <FaRegCirclePlay />
              </span>
              <span>How it works?</span>
            </button>
            <p className={styles.bannerInfo}>
              Trusted by over 8M sellers around the world
            </p>
          </div>
        </div>
        <div className={styles.bannerPic}>
          <div className={styles.tshirtWrapper}></div>
          <img
            className={styles.animation}
            src={require("../../components/photoes/animation.gif")}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
