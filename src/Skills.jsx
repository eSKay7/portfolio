export default function Skills(){
    const skills = [
        {
            title:"Languages",
            list: ["Python","Java","C","HTML","CSS","JavaScript","Assembly"]
        },
        {
            title:"Developer Tools",
            list: ["VS Code","Git","Android Studio","MySQL","Power BI","Docker","Shopify","Wordpress"]
        },
        {
            title:"Technologies/Frameworks",
            list: ["React.js","TypeScript","Node.js","Flask","Selenium","Cucumber","JUnit","Linux","Windows","MacOS"]
        }
    ]

    const skillLogos = {
        "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "Assembly": "https://img.icons8.com/?size=48&id=gVK745a4Vaur&format=png",
        "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg",
        "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        "Android Studio": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
        "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        "Power BI": "https://img.icons8.com/?size=48&id=qYfwpsRXEcpc&format=png",
        "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        "Shopify": "https://img.icons8.com/?size=80&id=BRIdulMG66MK&format=png",
        "Wordpress": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
        "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        "Selenium": "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/selenium/selenium-original.svg",
        "Cucumber": "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/cucumber/cucumber-plain.svg",
        "JUnit": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg",
        "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        "Windows": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows11/windows11-original.svg",
        "MacOS": "https://img.icons8.com/?size=48&id=122959&format=png"
    };


    return(
        <section id="skills" className="skills-section">
            {skills.map((skill, i) => (
                <div 
                key={i}
                className="skill"
                >
                    <h1 className="hologram-title">
                        <span data-text={skill.title}>{skill.title}</span>
                        <div className="scan-line"></div>
                    </h1>
                    <div className="skill-stack">
                        {skill.list.map((point, idx) => (
                            <div key={idx} className="skill-tree">
                                <img src={skillLogos[point]} alt={point} className="skill-icon" />
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}