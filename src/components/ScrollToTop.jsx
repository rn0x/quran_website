// ScrollToTop.jsx
import React, { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // انتقل إلى أعلى الصفحة عند تصيير المكون
  }, []);

  return null; // هذا المكون لا يعرض أي عناصر
};

export default ScrollToTop;
