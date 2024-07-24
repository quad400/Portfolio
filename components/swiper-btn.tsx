"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

const SwiperBtn = ({
  containerStyles,
  btnStyles
}: {
  containerStyles: string;
  btnStyles: string;
}) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button onClick={() => swiper.slidePrev()} className={btnStyles}>
        <PiCaretLeftBold />
      </button>
      <button onClick={() => swiper.slideNext()} className={btnStyles}>
        <PiCaretRightBold />
      </button>
    </div>
  );
};

export default SwiperBtn;
