import { useEffect, useState } from "react";
import img1 from "assets/images/slider/1.JPG";
import img2 from "assets/images/slider/2.JPG";
import img3 from "assets/images/slider/3.JPG";
import arrowLeft from "assets/images/slider/arrow-left-solid.svg";
import arrowRight from "assets/images/slider/arrow-right-solid.svg";
import styles from "./Slider.module.css";

function Slider() {
  const [index, setIndex] = useState(0);
  const setCorrectedIndex = (i) => {
    setIndex((i + 3) % 3);
  };
  useEffect(() => {
    setTimeout(() => {
      setCorrectedIndex(index + 1);
    }, 2000);
  }, []);
  return (
    <div className={styles.parent}>
      {/*eslint-disable*/}
      <div className={styles.left} onClick={() => setCorrectedIndex(index - 1)}>
        <img src={arrowLeft} alt="" />
      </div>
      <div className={styles.right} onClick={() => setCorrectedIndex(index + 1)}>
        <img src={arrowRight} alt="" />
        {/*eslint-disable*/}
      </div>
      {[img1, img2, img3].map((cardState, i) => (
        <div
          style={{ backgroundImage: `url(${cardState})`, left: `${(-index + i) * 100}vw` }}
          className={styles.card}
        />
      ))}
    </div>
  );
}
export default Slider;
