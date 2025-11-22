import React from "react"
import Degree from "./Degree"
import Awards from "./Awards"
import aboutPhoto from "../public/aboutPhoto.png"

export default function About(){
    const [panel, setPanel] = React.useState(null)
    const [visible, setVisible] = React.useState(null)

    const togglePanel = (curPanel) => {
        if (panel === curPanel) {
            setPanel(null);
            setTimeout(() => setVisible(null), 500);
        }
        else {
            if (panel != null) {
                setPanel(null);
                setTimeout(() => {
                    setVisible(curPanel);
                    setTimeout(() => setPanel(curPanel),10);
                },500);
            }
            else {
                setVisible(curPanel);
                setTimeout(() => setPanel(curPanel),10);
            }
        }
    };

    return(
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-info">
                    <h2>
                        Hi I'm <strong>Sarthak Kaushik</strong>
                    </h2>
                    <h3>
                        Software Developer
                    </h3>
                    <p>
                        I build web applications, mobile games, and backend systems —
                        always focused on creating clean, user-friendly solutions.
                    </p>
                    <div className="about-btns">
                        <button className="about-btn" onClick={() => togglePanel("degree")}>Degree</button>
                        <button className="about-btn" onClick={() => togglePanel("awards")}>Awards</button>
                    </div>

                    <div className={`panel-wrapper ${panel ? "open" : ""}`}>
                        {visible === "degree" ? <Degree /> : visible === "awards" ? <Awards /> : ""}
                    </div>
                </div>
                <div className="about-img">
                    <img src={aboutPhoto} alt="Sarthak" />
                </div>
            </div>
        </section>
    )
}