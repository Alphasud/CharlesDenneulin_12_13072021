import { useState, useEffect } from "react";

/**
 * Generates coordinates of mouse position on the screen, used in 'CuztomizedToolTipTime component'.
 */
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = ev => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

    useEffect(() => {
    const area = document.querySelector(".user-page__graph__left__bottom__time-chart");
    area.addEventListener("mousemove", updateMousePosition);

    return () => area.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
