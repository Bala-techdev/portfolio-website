const projects = [
  {
    title: 'Employee Management System',
    description:
      'A full stack platform to manage employee records, departments, and reporting workflows.',
    stack: ['Java', 'Spring Boot', 'ReactJS', 'MySQL'],
    github: 'https://github.com/yourusername/employee-management-system',
  },
  {
    title: 'Task Tracker',
    description:
      'A responsive productivity application for creating, assigning, and monitoring team tasks.',
    stack: ['ReactJS', 'JavaScript', 'CSS'],
    github: 'https://github.com/yourusername/task-tracker',
  },
  {
    title: 'Student Portal API',
    description:
      'A backend API for student profile management, authentication, and result processing.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Git'],
    github: 'https://github.com/yourusername/student-portal-api',
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container reveal">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub Repository
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
