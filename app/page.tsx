"use client";

import PortfolioScript from "@/components/PortfolioScript";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faArrowRight, 
  faDownload, 
  faPaperPlane, 
  faLaptopCode, 
  faExternalLinkAlt,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faHtml5, faCss3Alt, faJs, faReact, faPhp } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <>
      {/* Curseur personnalisé */}
      <div className="cursor"></div>
      <div className="cursor-follower"></div>

      {/* Header */}
      <header className="header">
        <nav className="nav">
          <a href="#" className="nav__logo">Cellou</a>
          <button className="nav__toggle" aria-label="Menu">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="nav__menu">
            <a href="#accueil" className="nav__link">Accueil</a>
            <a href="#projets" className="nav__link">Projets</a>
            <a href="#competences" className="nav__link">Compétences</a>
            <a href="#about" className="nav__link">À propos</a>
            <a href="#contact" className="nav__link nav__link--cta">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="accueil" className="hero">
        <div className="hero__background">
          <div className="shape shape--1"></div>
          <div className="shape shape--2"></div>
          <div className="shape shape--3"></div>
        </div>
        <div className="hero__content">
          <p className="hero__greeting">Bonjour, je suis</p>
          <h1 className="hero__title">
            Cellou <span>Sow-Mouvagha</span>
          </h1>
          <p className="hero__subtitle">
            Développeur Web<br />
            Je conçois des expériences web modernes qui captivent et performent
          </p>
          <div className="hero__cta">
            <a
              href="assets/CV_2026-02-23_Cellou_Sow--Mouvagha-1.pdf"
              download
              className="btn btn--primary"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span>Télécharger mon CV</span>
            </a>
            <a href="#projets" className="btn btn--secondary">
              <span>Voir mes projets</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="section section--projects">
        <div className="container">
          <div className="section__header" data-aos="fade-up">
            <h2 className="section__title">Mes Projets</h2>
            <p className="section__subtitle">Découvrez mes réalisations les plus récentes</p>
          </div>

          <div className="projets__grid">
            {/* Projet 1 */}
            <div className="projet__card" data-aos="fade-up" data-aos-delay={100}>
              <div className="projet__image">
                <div className="projet__image-bg">
                  <FontAwesomeIcon icon={faLaptopCode} />
                </div>
                <div className="projet__overlay">
                  <div className="projet__links">
                    <a href="https://currencyfloww.netlify.app/" target="_blank" className="projet__link-icon" aria-label="Voir le projet">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                    <a href="https://github.com/csm775/CurrencyFlow" target="_blank" className="projet__link-icon" aria-label="Code GitHub">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="projet__content">
                <div className="projet__tags">
                  <span className="projet__tag">HTML/CSS</span>
                  <span className="projet__tag">JavaScript</span>
                  <span className="projet__tag">API</span>
                </div>
                <h3 className="projet__title">Convertisseur de devises</h3>
                <p className="projet__description">
                  Création d’une application web interactive permettant de convertir différentes devises en temps réel.
                </p>
              </div>
            </div>

            {/* Projet 2 */}
            <div className="projet__card" data-aos="fade-up" data-aos-delay={200}>
              <div className="projet__image">
                <div className="projet__image-bg">
                  <FontAwesomeIcon icon={faLaptopCode} />
                </div>
                <div className="projet__overlay">
                  <div className="projet__links">
                    <a href="https://api-mauritanie.onrender.com/" target="_blank" className="projet__link-icon" aria-label="Voir le projet">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                    <a href="https://github.com/csm775/Api-Mauritanie" target="_blank" className="projet__link-icon" aria-label="Code GitHub">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="projet__content">
                <div className="projet__tags">
                  <span className="projet__tag">API/Python</span>
                  <span className="projet__tag">Javascript</span>
                  <span className="projet__tag">HTML/CSS</span>
                </div>
                <h3 className="projet__title">API + site d’intégration</h3>
                <p className="projet__description">
                  Création d’une API en Python pour fournir des informations sur la Mauritanie et intégration sur un site web.
                </p>
              </div>
            </div>

            {/* Projet 3 */}
            <div className="projet__card" data-aos="fade-up" data-aos-delay={300}>
              <div className="projet__image">
                <div className="projet__image-bg">
                  <FontAwesomeIcon icon={faLaptopCode} />
                </div>
                <div className="projet__overlay">
                  <div className="projet__links">
                    <a href="https://moviaa.netlify.app/" target="_blank" className="projet__link-icon" aria-label="Voir le projet">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                    <a href="https://github.com/csm775/Movia" target="_blank" className="projet__link-icon" aria-label="Code GitHub">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="projet__content">
                <div className="projet__tags">
                  <span className="projet__tag">REACT JS</span>
                  <span className="projet__tag">Vite</span>
                  <span className="projet__tag">API</span>
                </div>
                <h3 className="projet__title">Site Cinéma</h3>
                <p className="projet__description">
                  Consommation d’API REST pour l’affichage dynamique du contenu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section id="competences" className="section section--skills">
        <div className="container">
          <div className="section__header" data-aos="fade-up">
            <h2 className="section__title">Mes Compétences</h2>
            <p className="section__subtitle">Technologies et outils que je maîtrise</p>
          </div>
          <div className="skills__container">
            {[
              { icon: faHtml5, title: "HTML5" },
              { icon: faCss3Alt, title: "CSS3" },
              { icon: faJs, title: "JavaScript" },
              { icon: faReact, title: "React" },
              { icon: faPhp, title: "PHP" },
              { icon: faDatabase, title: "MySQL" },
            ].map((skill, i) => (
              <div key={i} className="skill__card" data-aos="zoom-in" data-aos-delay={100 + i * 50}>
                <div className="skill__icon-wrapper">
                  <FontAwesomeIcon icon={skill.icon} size="2x" />
                </div>
                <h3 className="skill__title">{skill.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="about" className="section section--about">
        <div className="container">
          <div className="about__container">
            <div className="about__image" data-aos="fade-right">
              <div className="image__wrapper">
                <img src="/images/IMG_2802.png" alt="Photo de Cellou" className="about__img" />
                <div className="image__border"></div>
                <div className="image__shape"></div>
              </div>
            </div>
            <div className="about__content" data-aos="fade-left">
              <div className="section__header section__header--left">
                <h2 className="section__title">À propos de moi</h2>
                <p className="section__subtitles">Passionné par la création digitale</p>
              </div>
              <div className="about__text">
                <p>
                  Passionné par le <strong>développement web</strong> et la création d'expériences numériques modernes,
                  je mets un point d'honneur à concevoir des sites à la fois élégants et performants.
                </p>
                <p>
                  En dehors du code, mes passions : <strong>football</strong>, <strong>histoire</strong>, <strong>voyage</strong>, <strong>technologie</strong>.
                </p>
              </div>
              <div className="about__stats">
                <div className="stat">
                  <div className="stat__number" data-count="10">0</div>
                  <div className="stat__label">Projets réalisés</div>
                </div>
                <div className="stat">
                  <div className="stat__number" data-count="2">0</div>
                  <div className="stat__label">Ans d'expérience</div>
                </div>
              </div>
              <a href="#contact" className="btn btn--primary">
                <span>Me contacter</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section section--contact">
        <div className="container">
          <div className="section__header" data-aos="fade-up">
            <h2 className="section__title">Me contacter</h2>
            <p className="section__subtitle">N'hésitez pas à me contacter</p>
          </div>
          <div className="contact__container">
            <div className="contact__info" data-aos="fade-right">
              <div className="contact__item">
                <div className="contact__icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                <div>
                  <h3>Email</h3>
                  <p>cellousowmouvagha@gmail.com</p>
                </div>
              </div>
              <div className="contact__item">
                <div className="contact__icon"><FontAwesomeIcon icon={faPhone} /></div>
                <div>
                  <h3>Téléphone</h3>
                  <p>+33 6 25 17 09 17</p>
                </div>
              </div>
              <div className="contact__item">
                <div className="contact__icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                <div>
                  <h3>Localisation</h3>
                  <p>Ile-De-France</p>
                </div>
              </div>
            </div>

            {/* Formulaire lié */}
            <form id="contact-form" className="contact__form" data-aos="fade-left">
              <div className="form__row">
                <input type="text" name="user_name" placeholder="Votre nom" className="form__input" required />
                <input type="email" name="user_email" placeholder="Votre email" className="form__input" required />
              </div>
              <input type="text" name="subject" placeholder="Sujet" className="form__input" required />
              <textarea name="message" placeholder="Votre message" className="form__textarea" rows={5} required></textarea>
              <button type="submit" className="btn btn--primary btn--full">
                <span id="btn-text">Envoyer le message</span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
              <p id="form-status"></p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__brand">
              <h3>Cellou</h3>
              <p>Développeur Web Full Stack passionné par la création d'expériences digitales exceptionnelles.</p>
              <div className="footer__social">
                <a href="https://linkedin.com/in/cellousowmouvagha" target="_blank" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/csm775" target="_blank" aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Script animations et interactions */}
      <PortfolioScript />
    </>
  );
}