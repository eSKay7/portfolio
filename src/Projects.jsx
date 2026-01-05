import ExpandCard from "./ExpandCard"

export default function Projects(){
    const {expandedCard, handleClick} = ExpandCard();

    const projects = [
        {
            title: "Memory Card Game",
            stack: ["Java", "Android Studio"],
            timeline: "Sept 2023 – Dec 2023",
            summary: [
                "Built a memory-training Android game using event-driven architecture and structured state management to ensure smooth, reactive gameplay.",
                "Implemented OOP-based UI components and custom animations that enhanced gameplay fluidity and reduced user error rates by 30% through iterative testing."
            ],
            link: "https://github.com/OleksandrLisnitskiy/AUCSC220_Project6"
        },
        {
            title: "BlackJack Game",
            stack: ["HTML", "JavaScript", "CSS", "Python (Flask)"],
            timeline: "Aug 2025 – Sept 2025",
            summary: [
                "Built a Blackjack web app with an interactive HTML/CSS/JavaScript frontend and a Flask backend to simulate real casino gameplay.",
                "Engineered advanced game logic (Ace handling, dealer AI, dynamic state updates) and integrated a Flask API–based banking system for secure, real-time balance tracking."
            ],
            link: "https://github.com/eSKay7/blackjack-game"
        },
        {
            title: "Portfolio Website",
            stack: ["HTML", "CSS", "React", "JavaScript"],
            timeline: "Sept 2025 – Dec 2025",
            summary: [
                "Designed a fully responsive portfolio with PS5-inspired futuristic UI & custom JS card-carousel navigation.",
                "Applied modern UI/UX (glass morphism, blur effects) and integrated project highlights with GitHub links."
            ],
            link: "https://github.com/eSKay7/portfolio"
        },
        {
            title: "AWS Deployed E-Commerce Demo",
            stack: ["Node.js", "Express", "MySQL", "AWS Elastic Beanstalk", "AWS RDS"],
            timeline: "Jan 2026",
            summary: [
                "Deployed a Node.js e-commerce demo on AWS Elastic Beanstalk with MySQL RDS backend, demonstrating cloud architecture and practical environment setup.",
                "Configured environment variables, EC2 roles, and optionally S3 for image hosting to showcase secure AWS service integration and deployment workflow."
            ],
            link: "https://github.com/eSKay7/aws-ecommerce-demo"
        }
    ]

    return(
        <>
            <h1 className="hologram-title">
                    <span data-text="Projects">Projects</span>
                    <div className="scan-line"></div>
            </h1>
            <section id="projects" className="projects-section">
                {projects.map((project, i) => (
                    <div
                    key={i}
                    className={`card ${expandedCard === i ? "expanded" : expandedCard != null ? "collapsed" : ""}`}
                    onClick={() => handleClick(i)}>
                        <h2>{project.title}</h2>
                        <div className="card-info">
                            <h4>{project.timeline}</h4>
                            <div className={`card-content ${expandedCard === i ? "show" : ""}`}>
                                <div className="card-summary">
                                    <ul>
                                        {project.summary.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="card-skills">
                                    {project.stack.map((skill, sidx) => (
                                        <div key={sidx} className="skill-pill">
                                            <span>{skill}</span>
                                        </div> 
                                    ))}
                                </div>
                                <div>
                                    <a className="link-button" href={project.link} target="_blank" rel="noopener noreferrer">
                                        GitHub →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
            </section>
        </>
    )
}