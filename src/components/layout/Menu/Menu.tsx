import React, { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import styles from "./Menu.module.css";

import { FaBars } from "react-icons/fa6";
import Button from "../../common/Button";

import GRProducoesWhite from "../../../Assets/img/GrProducoesWhite.png"

// import { motion as m } from "motion/react";

const Menu: React.FC = ({ }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [overlayPresent, setOverlayPresent] = useState(false);

    const navigate = useNavigate();

    const toggleMenu = () => {
        if (menuOpen) {
            setMenuOpen(false);
            setTimeout(() => setOverlayVisible(false), 300);
            setTimeout(() => setOverlayPresent(false), 1000);
        } else {
            setOverlayPresent(true);
            setMenuOpen(true);
            setOverlayVisible(true);
        }
    };

    const toggleMenuLink = () => {
        if (menuOpen) {
            setMenuOpen(false);
            setTimeout(() => setOverlayVisible(false), 300);
            setTimeout(() => setOverlayPresent(false), 1000);
        } else {
            setOverlayPresent(true);
            setMenuOpen(true);
            setOverlayVisible(true);
        }
        window.scrollTo(0, 0);
    };

    const handleLogoClick = () => {
        navigate("/");
        if (menuOpen) {
            setMenuOpen(false);
            setTimeout(() => setOverlayVisible(false), 300);
            setTimeout(() => setOverlayPresent(false), 1000);
        }
        window.scrollTo(0, 0);
    }

    return (
        <nav className={`${styles.navigation}`}>
            <div className={styles.hamburguerMenu}>
                <Button transparent onClick={toggleMenu}>
                    <FaBars className={styles.icon} />
                    <svg width="22" height="22" viewBox="0 0 248 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g className={styles.svgIcon}>
                            <path d="M1.33333 93H246.667" />
                            <path d="M1.33333 1H246.667" />
                            <path d="M1.33333 185H246.667" />
                        </g>
                    </svg>

                </Button>
            </div>
            <div className={styles.logo} onClick={handleLogoClick}>
                <img src={GRProducoesWhite} alt="" />
            </div>
            {overlayPresent && <div className={`${styles.overlay} ${!overlayVisible ? styles.hidden : ''}`} onClick={toggleMenu}></div>}
            <div className={`${styles.links} ${menuOpen ? styles.menuOpen : styles.menuClosed}`}>
                {["Home", "Fashion Film", "Eventos", "Contato"].map((text, index) => (
                    <NavLink
                        key={text}
                        className={({ isActive }) => (
                            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
                        )}
                        to={
                            text == "Home" ? "/"
                                // : text == "Live Shopping" ? "/liveShopping"
                                : text == "Fashion Film" ? "/fashionFilm"
                                    : text == "Eventos" ? "/eventos"
                                        : text == "Contato" ? "/contato"
                                            : "/"
                        }
                        onClick={() => toggleMenuLink()}
                        style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                        {text}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Menu;