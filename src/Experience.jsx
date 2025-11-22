import ExpandCard from "./ExpandCard"

export default function Experience(){
    const {expandedCard, handleClick} = ExpandCard();

    const experiences = [
        {
            company: "Red Autumn Brewing Co Inc.",
            title: "Software Developer",
            timeline: "May 2024 - Present",
            city: "Edmonton, Alberta",
            summary: [
                "Engineered a blockchain-integrated web app using React, TypeScript, and NFC chip technology to enable secure identity verification and real-time hardware communication.",
                "Optimized Shopify e-commerce systems through code refactoring, API integration, boosting site efficiency and reliability.",
                "Built and tested interactive UI prototypes leveraging advanced JavaScript and CSS animations, improving user experience and responsiveness across devices."
            ],
            skills: [
                "React.js", "TypeScript", "Node.js", "Flask",
                "Shopify"
            ]
        },
        {
            company: "Calgtech Corporation",
            title: "Software Engineer Intern",
            timeline: "June 2023 - Aug 2023",
            city: "Calgary, Alberta",
            summary: [
                "Engineered 5+ responsive websites using JavaScript, and WordPress, implementing modular UI components and optimizing performance.",
                "Extended WordPress functionality with custom plugins, REST API integrations, and booking systems, improving client lead capture by 15%.",
                "Collaborated in an Agile environment with senior engineers to deploy production-ready solutions, maintaining 100% on-time project delivery.",
            ],
            skills: [
                "HTML", "CSS", "JavaScript", "Wordpress"
            ]
        },
        {
            company: "NARS Consulting",
            title: "Software Engineer Intern",
            timeline: "April 2023 - Sept 2023",
            city: "Edmonton, Alberta",
            summary: [
                "Contributed to the development of an internal inventory management system using Python and SQL, improving operational tracking efficiency.",
                "Collaborated with cross-functional teams in Agile/Scrum sprints, assisting in feature implementation, testing, and delivery of sprint goals.",
                "Gained exposure to Power BI dashboards and data visualization workflows, supporting analytics-driven decision-making across departments.",
            ],
            skills: [
                "Python", "MySQL", "JavaScript", "PowerBI"
            ]
        }
    ]

    return (
        <>
            <h1 className="hologram-title">
                <span data-text="Experience">Experience</span>
                <div className="scan-line"></div>
            </h1>
            <section id="experience" className="experience-section">
                {experiences.map((experience, i) => (
                    <div 
                    key={i} 
                    className={`card ${expandedCard === i ? "expanded" : expandedCard != null ? "collapsed" : ""}`} 
                    onClick={() => handleClick(i)}>
                        <h2>{experience.company}</h2>
                        <div className="card-info">
                            <h3>{experience.title}</h3>
                            <h4>{experience.timeline}</h4>
                            <h4>{experience.city}</h4>
                            <div className={`card-content ${expandedCard === i ? "show" : ""}`}>
                                <div className="card-summary">
                                    <ul>
                                        {experience.summary.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="card-skills">
                                    {experience.skills.map((skill, sidx) => (
                                        <div key={sidx} className="skill-pill">
                                            <span>{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )

}