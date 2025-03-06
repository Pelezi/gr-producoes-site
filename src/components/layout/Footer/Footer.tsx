import React, { useState, useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import styles from "./Footer.module.css";

import GRProducoesWhite from "../../../Assets/img/GrProducoesWhite.png"

import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer: React.FC = ({ }) => {
    const getCurrentYear = () => new Date().getFullYear();

    const navigate = useNavigate();

    return (
        <footer className={styles.footer}>
            <div className={styles.topSection}>
                <a href="/" className={styles.logo}>
                    <img src={GRProducoesWhite} alt="GR Produções" className={styles.logoImage} />
                    <span className={styles.logoText}>Gr Produções</span>
                </a>
                <div className={styles.column}>
                    <h2 className={styles.columnTitle}>Tipos de eventos</h2>
                    <ul className={styles.linkList}>
                        <li><a onClick={() => navigate('/fashionfilm')} className={styles.link}>Fashion Film</a></li>
                        <li><a onClick={() => navigate('/eventos')} className={styles.link}>Eventos</a></li>
                    </ul>
                </div>
                {/* <div className={styles.column}>
                    <h2 className={styles.columnTitle}>FOLLOW US</h2>
                    <ul className={styles.linkList}>
                        <li><a href="https://github.com" className={styles.link}>GitHub</a></li>
                        <li><a href="https://discord.com" className={styles.link}>Discord</a></li>
                    </ul>
                </div> */}
                <div className={styles.column}>
                    <h2 className={styles.columnTitle}>Fale comigo</h2>
                    <ul className={styles.linkList}>
                        <li><a href="mailto:grproducoes@gmail.com" className={styles.link}>grproducoes@gmail.com</a></li>
                        <li><a href="https://wa.me/558181880305" className={styles.link}>+55 81 8188-0305</a></li>
                    </ul>
                </div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.bottomSection}>
                <span className={styles.copyright}>
                    © {getCurrentYear()} <strong>Gr Produções</strong>
                </span>
                <span className={styles.author}>Feito por <a href="https://github.com/Pelezi">Pelezi</a></span>
                <div className={styles.socialIcons}>
                    <a
                        href="https://facebook.com"
                        aria-label="Facebook"
                        className={styles.iconLink}
                    >
                        <FaFacebookF size={20} />
                    </a>
                    <a
                        href="https://twitter.com"
                        aria-label="Twitter"
                        className={styles.iconLink}
                    >
                        <FaTwitter size={20} />
                    </a>
                    <a
                        href="https://instagram.com"
                        aria-label="Instagram"
                        className={styles.iconLink}
                    >
                        <FaInstagram size={20} />
                    </a>
                    <a
                        href="https://github.com"
                        aria-label="GitHub"
                        className={styles.iconLink}
                    >
                        <FaGithub size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;