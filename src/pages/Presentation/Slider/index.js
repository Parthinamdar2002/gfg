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
      {[
        { img: img1, text: "yo this is meow" },
        { img: img2, text: "This is bhau" },
        { img: img3, text: "This is bahin" },
      ].map((cardState, i) => (
        <>
          <div
            style={{ backgroundImage: `url(${cardState.img})`, top: `${(-index + i) * 100}vh` }}
            className={styles.cardLeft}
          >
            <h1>{cardState.text}</h1>
          </div>
          <div
            style={{ backgroundImage: `url(${cardState.img})`, top: `${(index - i) * 100}vh` }}
            className={styles.cardRight}
          >
            <h1>{cardState.text}</h1>
          </div>
        </>
      ))}
    </div>
  );
}
export default Slider;
