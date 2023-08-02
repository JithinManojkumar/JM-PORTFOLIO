import React, { useEffect, useState } from "react";
import "../App.css";
import profilePicture from "../img/profile.jpeg";
import aboutBG from "../svg/svg.svg";
import contactBG from "../img/contact.png";
import Gmail from "../img/gmail.png";
import Instagram from "../img/instagram.png";
import Linkedin from "../img/linkedin.png";
import Github from "../img/github.png";
import Resume from "../docs/RESUME.pdf";
import tick from "../img/tick.png";

/* Navigation Bar */

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div>Home</div>
      <a href="#about-me" className="link">
        About Me
      </a>
      <a href="#skills" className="link">
        Skills
      </a>
      <a href="#projects" className="link">
        Projects
      </a>
      <a href="#contact" className="link">
        Contact
      </a>
    </div>
  );
};

/*Role and Button */

const RoleAndButton = () => {
  return (
    <div className="role-and-button-container">
      <div className="role">
        MERN STACK<span>DEVELOPER</span>
      </div>
      <div className="hire-me-btn-and-download-cv-btn-container">
        <div className="hire-me-btn">
          <a href="#contact" className="hire-me-link">
            Hire me
          </a>
        </div>
        <div className="download-cv-btn">
          <a href={Resume} className="website-link" download>
            Download CV <div className="download-symbol">&darr;</div>
          </a>
        </div>
      </div>
    </div>
  );
};

/* Profile Pic */

const ProfilePic = () => {
  return (
    <div className="profile-picture-and-profile-name-container">
      <div className="profile-picture-container">
        <img src={profilePicture} alt="" className="profile-picture" />

        <div className="area-container">
          <div className="left-area"></div>
          <div className="right-area"></div>
        </div>
      </div>
      <div className="profile-name">
        JITHIN<span>MANOJKUMAR</span>
      </div>
    </div>
  );
};

/* Role , Button and Profile Picture */

const RoleAndButtonAndProfilePicture = () => {
  return (
    <div className="role-and-button-and-profile-picture">
      <RoleAndButton />
      <ProfilePic />
    </div>
  );
};

/* About me */

const Aboutme = () => {
  return (
    <div className="about-me-and-about-background-container" id="about-me">
      <div className="about-me-container">
        <div className="about-me-header">
          About <span>me</span>
        </div>

        <div className="about">
          Hi! This is Jithin Manojkumar, a passionate and enthusiastic
          <span> MERN Stack Developer</span> with a strong foundation in web
          development. I have a keen interest in crafting elegant and efficient
          solutions to complex problems using cutting-edge technologies.
        </div>
      </div>
      <img src={aboutBG} alt="" className="about-bg" />
    </div>
  );
};

/* Skills */

const Skills = () => {
  return (
    <div>
      <div className="skills-container" id="skills">
        <div className="skills-header">
          My <span>Skills</span>
        </div>
        <div className="skills">
          <div>
            <span>HTML</span>
          </div>

          <div>
            <span>CSS</span>
          </div>

          <div>
            <span>JAVASCRIPT</span>
          </div>

          <div>
            <span>REACT JS</span>
          </div>

          <div>
            <span>MONGO DB</span>
          </div>

          <div>
            <span>EXPRESS JS</span>
          </div>

          <div>
            <span>NODE JS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Projects */

const Projects = () => {
  return (
    <div>
      <div className="projects-container" id="projects">
        <div className="projects-header">
          <div>
            Recent <span>Projects </span>
          </div>
          <div className="projects">
            <div>
              <span>
                <a
                  href="https://expense-tracker-application-mern.netlify.app/"
                  target="_blank"
                  className="website-link"
                  rel="noreferrer"
                >
                  Expense Tracker Application using <span> MERN </span>Stack
                </a>
              </span>
            </div>

            <div>
              <span>
                <a
                  href="https://crypto-price-live-tracker.netlify.app/"
                  target="_blank"
                  className="website-link"
                  rel="noreferrer"
                >
                  Crypto Currency Live Price Tracker using
                  <span> Socket . io </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Contact */

const Contact = () => {
  /* Use State*/

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  /* Loading Component */

  const LoadingComponent = () => {
    return (
      <div className="loading-component">
        <div></div>
      </div>
    );
  };

  /* Posting the Data to Server */

  async function postData(e) {
    setLoader(true);
    e.preventDefault();
    const url = "https://personal-portfolio-8d6r.onrender.com/api/post-data";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    });
    const data = await res.json();

    if (data.status === "error") {
      setLoader(false);
      setResponseMsg(data.message);
      setTimeout(() => {
        setResponseMsg("");
      }, 3000);
    }

    if (data.status === "ok") {
      setLoader(false);
      setResponseMsg(data.message);

      setTimeout(() => {
        setResponseMsg("");
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 1000);
    }

    console.log(data);
  }

  /* Splitting Email to find Dot */

  const splittedEmail = email.split("");

  const filterDot = splittedEmail.filter((d) => {
    return d === ".";
  });

  /* Splitting Message to find the Total Characters */

  const splittedMessage = message.split("");

  return (
    <div>
      <div className="contacts-container" id="contact">
        <div className="contacts-header">
          Got a Project in <span> Mind ?</span>
        </div>
        <div className="contact-bg-and-input-container">
          <img src={contactBG} alt="" className="contact-bg" />

          <form className="input-container" onSubmit={postData}>
            <div className="response-msg">{responseMsg}</div>
            <div>
              {name ? (
                <span className="after-input">Name</span>
              ) : (
                <span className="before-input">Name</span>
              )}

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {name ? (
                <img src={tick} alt="" className="tick-symbol" width={15} />
              ) : (
                ""
              )}
            </div>

            <div>
              {email ? (
                <span className="after-input">Email</span>
              ) : (
                <span className="before-input">Email</span>
              )}

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {filterDot.length > 0 ? (
                <img src={tick} alt="" className="tick-symbol" width={15} />
              ) : (
                ""
              )}
            </div>

            <div>
              {message ? (
                <span className="after-input">Message</span>
              ) : (
                <span className="before-input">Message</span>
              )}

              <textarea
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              {splittedMessage.length > 0 ? (
                <img src={tick} alt="" className="tick-symbol" width={15} />
              ) : (
                ""
              )}
            </div>

            <button
              type="submit"
              className="send-message-btn"
              disabled={loader}
            >
              {loader ? <LoadingComponent /> : "Send Message"}
            </button>
          </form>
        </div>
        <div className="social-media-container">
          <a
            href="mailto:jithinmenon03@gmail.com"
            target="_blank"
            className="link"
            rel="noreferrer"
          >
            <img src={Gmail} alt="Gmail" className="sm" />
          </a>

          <a
            href="https://www.linkedin.com/in/jithin-manojkumar-a372a827a/"
            target="_blank"
            className="link"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="Linkedin" className="sm" />
          </a>

          <a
            href="https://www.instagram.com/jithin_manojkumar/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <img src={Instagram} alt="Instgarm" className="sm" />
          </a>

          <a
            href="https://github.com/JithinManojkumar"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <img src={Github} alt="Git-Hub" className="sm" />
          </a>
        </div>

        <div className="copyrights">&copy; Jithin Manojkumar</div>
      </div>
    </div>
  );
};

/* Main Component */

const Portfolio = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [goToTopBtn, setgoToTopBtn] = useState(false);

  const HandleHeight = () => {
    setScrollHeight(window.scrollY);
  };

  /* When the Button is clicked */

  const scrollFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const ScrollTopBtn = () => {
    return (
      <div className="scroll-top">
        <div onClick={scrollFunction}>&uarr;</div>
      </div>
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", HandleHeight);

    if (scrollHeight > 100) {
      setgoToTopBtn(true);
    } else {
      setgoToTopBtn(false);
    }
  }, [scrollHeight]);

  return (
    <div>
      {goToTopBtn ? <ScrollTopBtn /> : ""}
      <Navigation />
      <RoleAndButtonAndProfilePicture />
      <Aboutme />
      {<Skills />}
      <Projects />
      <Contact />
    </div>
  );
};

export default Portfolio;
