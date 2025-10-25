import styles from "./projects.module.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "WelcomeCoffee",
      description: "This project utilizes various technologies to enable users to create personalized coffee ingredients. Upon logging in, users can access their favorite coffee data. It applies React and JavaScript concepts, from abstracting components to managing data structures. Additionally, it establishes a JSON server to generate an API for tracking user favorites and login details.",
      image: "/project1.jpg",
      technologies: ["HTML/CSS", "Tailwind", "TypeScript", "JavaScript", "React-Router"],
      githubLink: "https://github.com/yourusername/welcomecoffee",
      liveLink: "https://welcomecoffee.com"
    }
  ];

  return (
    <section className={styles.projects} id="project">
      <h2 className={styles.sectionTitle}>Projects</h2>
      
      <div className={styles.projectsList}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.exclamation}>!</span>
              </div>
            </div>
            
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              
              <div className={styles.techStack}>
                {project.technologies.map((tech) => (
                  <span key={tech} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className={styles.projectDescription}>
                {project.description}
              </p>
              
              <div className={styles.projectLinks}>
                <a href={project.githubLink} className={styles.githubBtn}>
                  View Github
                </a>
                <a href={project.liveLink} className={styles.liveBtn}>
                  View Project ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}