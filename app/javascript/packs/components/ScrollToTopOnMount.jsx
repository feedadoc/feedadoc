import React, { useEffect } from "react";

const ScrollToTopOnMount = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  return null;
};

export default ScrollToTopOnMount;
