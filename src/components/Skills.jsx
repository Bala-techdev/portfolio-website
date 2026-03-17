const skillGroups = [
  {
    title: 'Frontend',
    skills: ['ReactJS', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    skills: ['Java', 'Spring Boot & AI'],
  },
  {
    title: 'Database',
    skills: ['MySQL'],
  },
  {
    title: 'Tools',
    skills: ['Git','postman'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container reveal">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
