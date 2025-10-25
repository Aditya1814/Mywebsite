"use client"
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from "./skills.module.css";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
  ];

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
        observer.unobserve(currentRef); // Use variable in cleanup
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`${styles.skills} ${isVisible ? styles.visible : ''}`} 
      id="skills"
    >
      <h2 className={`${styles.sectionTitle} ${isVisible ? styles.fadeInUp : ''}`}>
        My Skills
        <span className={styles.underline}></span>
      </h2>

      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div 
            key={skill.name} 
            className={`${styles.skillCard} ${isVisible ? styles.fadeInScale : ''}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className={styles.iconWrapper}>
              <Image 
                src={skill.icon} 
                alt={skill.name}
                className={styles.skillIcon}
                width={80}
                height={80}
                unoptimized
              />
            </div>
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}