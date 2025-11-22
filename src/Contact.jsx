export default function Contact(){
    const contact = [
        {
            title: "LinkedIn",
            text: "Sarthak Kaushik",
            link: "https://www.linkedin.com/in/sarthak-kaushik-31296b217/",
            linktext: "Connect with me" 
        },
        {
            title: "GitHub",
            text: "eSKay7",
            link: "https://github.com/eSKay7",
            linktext: "View my projects" 
        },
        {
            title: "Email",
            text: "sarthakkaushik2004@gmail.com",
            link: "mailto:sarthakkaushik2004@gmail.com",
            linktext: "Reach out" 
        }
    ]

    return(
        <>
            <h1 className="hologram-title">
                <span data-text="Socials">Socials</span>
                <div className="scan-line"></div>
            </h1>
            <section id="contact" className="contact-section">
                {contact.map((social, i) => (
                    <div
                    key={i}
                    className="card">
                        <h2>{social.title}</h2>
                        <div className="card-info">
                            <h4>{social.text}</h4>
                            <a href={social.link} target="_blank" rel="noopener noreferrer">
                                {social.linktext}
                            </a>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}