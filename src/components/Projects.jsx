import employeePreview from '../assets/project-employee.svg'
import taskPreview from '../assets/project-task.svg'
import studentPreview from '../assets/project-student.svg'

const projects = [
  {
    title: 'Employee Management System',
    description:
      'A full stack platform to manage employee records, departments, and reporting workflows.',
    stack: ['Java', 'Spring Boot', 'ReactJS', 'MySQL'],
    features: ['Role-based access', 'Employee lifecycle tracking', 'Department analytics dashboard'],
    image: employeePreview,
    liveDemo: 'https://employee-management-demo.example.com',
    github: 'https://github.com/yourusername/employee-management-system',
  },
  {
    title: 'Task Tracker',
    description:
      'A responsive productivity application for creating, assigning, and monitoring team tasks.',
    stack: ['ReactJS', 'JavaScript', 'CSS'],
    features: ['Kanban-style task flow', 'Team assignments with due dates', 'Progress and priority filters'],
    image: taskPreview,
    liveDemo: 'https://task-tracker-demo.example.com',
    github: 'https://github.com/yourusername/task-tracker',
  },
  {
    title: 'Student Portal API',
    description:
      'A backend API for student profile management, authentication, and result processing.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Git'],
    features: ['JWT authentication', 'Result publishing endpoints', 'Profile and enrollment modules'],
    image: studentPreview,
    liveDemo: 'https://student-portal-demo.example.com',
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
              <div className="project-media">
                <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-features">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                <a className="btn btn-primary" href={project.liveDemo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a className="btn btn-secondary" href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
