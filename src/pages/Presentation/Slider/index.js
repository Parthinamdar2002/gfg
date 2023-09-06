import { useEffect, useState } from "react";
import img1 from "assets/images/slider/1.jpeg";
import img2 from "assets/images/slider/2.jpeg";
import img3 from "assets/images/slider/3.jpeg";
import img4 from "assets/images/slider/4.jpeg";
import img5 from "assets/images/slider/5.jpeg";
import img6 from "assets/images/slider/6.jpeg";
import img7 from "assets/images/slider/7.jpeg";
import img8 from "assets/images/slider/8.jpeg";
import img9 from "assets/images/slider/9.jpeg";
import img10 from "assets/images/slider/10.jpeg";
import img11 from "assets/images/slider/11.jpeg";
import img12 from "assets/images/slider/12.jpeg";
import img13 from "assets/images/slider/13.jpeg";
import img14 from "assets/images/slider/14.jpeg";
import img15 from "assets/images/slider/15.jpeg";
import img16 from "assets/images/slider/16.jpeg";
import img17 from "assets/images/slider/17.jpeg";
import img18 from "assets/images/slider/18.jpeg";
import img19 from "assets/images/slider/19.jpeg";
import img20 from "assets/images/slider/20.jpeg";
import img21 from "assets/images/slider/21.jpeg";
import img22 from "assets/images/slider/22.jpeg";
import img23 from "assets/images/slider/23.jpeg";
import img24 from "assets/images/slider/24.jpeg";
import arrowLeft from "assets/images/slider/arrow-left-solid.svg";
import arrowRight from "assets/images/slider/arrow-right-solid.svg";
import styles from "./Slider.module.css";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
];
const totalImages = images.length;
function Slider() {
  const [index, setIndex] = useState(0);
  const setCorrectedIndex = (i) => {
    setIndex((i + totalImages) % totalImages);
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
      {images.map((cardState, i) => (
        <>
          <div
            style={{ backgroundImage: `url(${cardState})`, top: `${(-index + i) * 100}vh` }}
            className={styles.cardLeft}
          ></div>
          <div
            style={{ backgroundImage: `url(${cardState})`, top: `${(index - i) * 100}vh` }}
            className={styles.cardRight}
          ></div>
        </>
      ))}
    </div>
  );
}
export default Slider;
