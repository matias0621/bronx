"use client";
import { useEffect, useRef } from "react";
import styles from "./FadeIn.module.css"; // Archivo de estilos

type FadeInComponentProps = {
  children: React.ReactNode;
};

const FadeInComponent: React.FC<FadeInComponentProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add(styles.fadeIn);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`${styles.hidden}`}>
      {children}
    </div>
  );
};

export default FadeInComponent;
