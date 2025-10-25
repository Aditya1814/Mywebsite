"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from "./hero.module.css";

export default function Hero() {
  const roles = [" Software Developer", " Programmer", " Full Stack Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const typingSpeed = isDeleting ? 20 : 50;
    const pauseTime = isDeleting ? 500 : 1500;
    if (!isDeleting && displayedText === currentRole) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentRole.substring(0, displayedText.length - 1)
          : currentRole.substring(0, displayedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 600);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.greeting}>
            Hello<span className={styles.dot}>.</span>
          </h1>
          <div className={styles.divider}></div>
          <h2 className={styles.introduction}>I&apos;m Aditya Reddy</h2>
          <h3 className={styles.title}>
            <span className={styles.iAm}>I am a    </span>
            <span className={styles.animatedText}>
              {displayedText}
            </span>
            <span className={`${styles.cursor} ${showCursor ? styles.cursorVisible : ''}`}>|</span>
          </h3>
          <p className={styles.description}>
            I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
          </p>
          <div className={styles.buttons}>
            <a
              href="/files/resume.pdf"
              className={styles.secondaryBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/portifolioimg.jfif"
              alt="Aditya"
              className={styles.avatar}
              width={450}
              height={450}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}