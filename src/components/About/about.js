"use client"
import { useState, useEffect, useRef } from 'react';
import styles from "./about.module.css";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current; // Store ref in variable
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the variable in cleanup
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`${styles.about} ${isVisible ? styles.visible : ''}`} 
      id="about"
    >
      <h2 className={`${styles.sectionTitle} ${isVisible ? styles.fadeInUp : ''}`}>
        About Me
        <span className={styles.underline}></span>
      </h2>
      
      <p className={`${styles.description} ${isVisible ? styles.fadeInUp : ''}`}>
       Hi, I&apos;m Aditya Surya Bhaskar Reddy Kovvuri, a passionate Full-Stack Software Developer with hands-on experience in building scalable web applications and integrating cutting-edge Generative AI (GenAI) technologies. I specialize in React.js, Node.js, TypeScript, and AI-driven automation, creating solutions that combine robust backend logic with seamless user experiences.
      </p>
    </section>
  );
}