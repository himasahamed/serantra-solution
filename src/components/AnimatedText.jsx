import { useEffect, useRef, useState } from "react";

export default function AnimatedText({
  text,
  delay = 30,
  className = "",
}) {
  const textRef = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <span
      ref={textRef}
      className={`animated-text ${className}`}
      aria-label={text}
    >
      {text.split("").map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          aria-hidden="true"
          className={`animated-letter ${
            visible ? "animated-letter-visible" : ""
          }`}
          style={{
            transitionDelay: `${index * delay}ms`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
}