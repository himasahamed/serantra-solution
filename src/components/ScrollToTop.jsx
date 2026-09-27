import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const {
    pathname,
    search,
    hash,
  } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const element =
        document.getElementById(
          hash.replace("#", "")
        );

      if (element) {
        window.setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 50);

        return;
      }
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [
    pathname,
    search,
    hash,
  ]);

  return null;
}