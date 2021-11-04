import React from "react";
import PropTypes from "prop-types";
import styles from "./Carousel.module.scss";
import useTransition from "./useTransition";

export default function Carousel({ children, width, unit }) {
  // here we extracted the carousel functionality into its own hook
  const { translate, items, setAction } = useTransition(width, children);

  const handleNext = () => setAction("next");
  const handlePrev = () => setAction("prev");
  const prevText = "< prev";
  const nextText = "next >";

  return (
    <div
      className={styles.parent}
      style={{
        width: `${width}${unit}`,
      }}
    >
      <div className={styles.container}>
        <div
          className={styles.inner}
          style={{
            width: `${width * items.length}${unit}`,
            transform: `translateX(-${translate}${unit})`,
          }}
        >
          {items.map((item) => (
            <div
              className={styles.item}
              style={{
                width: `${width}${unit}`,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <button className={`${styles.next} button`} onClick={handleNext}>
          {nextText}
        </button>
        <button className={`${styles.prev} button`} onClick={handlePrev}>
          {prevText}
        </button>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  width: PropTypes.number,
  unit: PropTypes.string,
};

Carousel.defaultProps = {
  width: 350,
  unit: "px",
};
