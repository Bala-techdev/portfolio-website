const journeyMilestones = [
  {
    title: 'Learning Java Fundamentals',
    period: 'Milestone 1',
    description:
      'Built a strong programming base with object-oriented concepts, problem decomposition, and core backend thinking.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2 3 7v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V7l-9-5Zm0 2.2 6.9 3.8v4.8c0 4.1-2.9 8-6.9 9.2-4-1.2-6.9-5.1-6.9-9.2V8l6.9-3.8Zm-1 4.6h2v6h-2v-6Zm0 7.2h2v2h-2v-2Z" />
      </svg>
    ),
  },
  {
    title: 'Mastering DSA Practice',
    period: 'Milestone 2',
    description:
      'Practiced arrays, trees, graphs, and dynamic programming to improve time complexity awareness and interview readiness.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3a4 4 0 1 0 2.9 6.8l2.1 1.2v1.9l-2.2 1.2A4 4 0 1 0 11 18h2v1a2 2 0 1 0 2-2h-2v-2h2a2 2 0 1 0 0-2h-2v-1l2.1-1.2A4 4 0 1 0 17 7h-2.4L12 8.5 9.4 7H11A4 4 0 0 0 7 3Z" />
      </svg>
    ),
  },
  {
    title: 'Building with React',
    period: 'Milestone 3',
    description:
      'Created component-driven interfaces, reusable UI patterns, and responsive experiences with modern React workflows.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 9.1a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm0 1.9a1 1 0 1 1 0 2.1 1 1 0 0 1 0-2.1Z" />
        <path d="M12 3.8c2.4 0 4.7 3.5 5.7 8.2 1-.4 1.9-.7 2.7-.7.9 0 1.6.2 2 .8.8 1.2-.1 3.3-2.3 5.3 1.1 2.8 1 4.9-.1 6-.4.4-1 .6-1.7.6-1.1 0-2.6-.5-4.3-1.4-1.7.9-3.2 1.4-4.3 1.4-.8 0-1.4-.2-1.7-.6-1.1-1.1-1.2-3.2-.1-6-2.2-2-3.1-4.1-2.3-5.3.4-.5 1.1-.8 2-.8.8 0 1.7.2 2.7.7 1-4.7 3.3-8.2 5.7-8.2Zm0 1.9c-1.3 0-3.2 2.9-4.1 7 1.3.7 2.7 1.5 4.1 2.3 1.4-.8 2.8-1.6 4.1-2.3-.9-4.1-2.8-7-4.1-7Zm-6.6 7.5c-.2 0-.4 0-.5.1-.2.3.2 1.8 1.9 3.6.5-1 .9-2.1 1.4-3.1-1.1-.4-2-.6-2.8-.6Zm13.2 0c-.8 0-1.7.2-2.8.6.5 1 .9 2.1 1.4 3.1 1.7-1.8 2.1-3.3 1.9-3.6 0-.1-.2-.1-.5-.1Zm-6.6 3.6c-1 .6-2 1.1-2.9 1.7.4.8.8 1.6 1.3 2.3.6-.3 1.1-.5 1.6-.8.5.3 1 .6 1.6.8.5-.8.9-1.5 1.3-2.3-.9-.5-1.9-1.1-2.9-1.7Zm-4.3 2.5c-.7 2-.7 3.4-.4 3.7.2.2.9.1 1.9-.3-.5-.8-1-1.7-1.5-2.6Zm8.6 0c-.5.9-1 1.8-1.5 2.6 1 .4 1.7.5 1.9.3.3-.3.3-1.7-.4-3.7Z" />
      </svg>
    ),
  },
  {
    title: 'Developing with Spring Boot',
    period: 'Milestone 4',
    description:
      'Designed REST APIs, integrated MySQL, and implemented secure, maintainable services for real-world applications.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C7 2 3 5.5 3 10.4c0 3.5 2 6.6 5 8.1V22l4-2 4 2v-3.5c3-1.5 5-4.6 5-8.1C21 5.5 17 2 12 2Zm0 2c3.9 0 7 2.8 7 6.4 0 2.5-1.5 4.8-3.8 5.9l-.7.3V18l-2-1-2 1v-1.4l-.7-.3C6.5 15.2 5 12.9 5 10.4 5 6.8 8.1 4 12 4Zm3.2 3.2-4.9 2.3-1.7-1 .7-1.2 1.1.6 4-1.9.8 1.2Zm-6 4.6h5.6v1.8H9.2v-1.8Z" />
      </svg>
    ),
  },
]

function MyJourney() {
  return (
    <section id="journey" className="section">
      <div className="container reveal">
        <h2>My Journey</h2>
        <div className="journey-timeline" role="list">
          {journeyMilestones.map((milestone, index) => (
            <article key={milestone.title} className="journey-item" role="listitem" style={{ '--item-order': index + 1 }}>
              <div className="journey-icon" aria-hidden="true">
                {milestone.icon}
              </div>
              <div className="journey-content">
                <p className="journey-period">{milestone.period}</p>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyJourney