"use client";

import React, { useRef, useEffect } from "react";
import styles from "./scroll-shadow.module.scss";

function ScrollShadow({ wrapperRef, scrollerRef }) {
  const shadowRef = useRef(null);

  useEffect(() => {
    const contentScrollHeight =
      scrollerRef.current.scrollHeight - wrapperRef.current.offsetHeight;

    if (contentScrollHeight <= 0) {
      shadowRef.current.style.opacity = 0;
      return;
    }

    scrollerRef.current.addEventListener("scroll", function () {
      const currentScroll = this.scrollTop / contentScrollHeight;
      shadowRef.current.style.opacity = 1 - currentScroll;
    });
  }, [scrollerRef, wrapperRef]);

  return <div ref={shadowRef} className={styles.shadow}></div>;
}

export default ScrollShadow;
