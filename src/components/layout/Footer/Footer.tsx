import React from "react";

import { useNavigate } from "react-router-dom";

import styles from "./Footer.module.css";

import GRProducoesWhite from "../../../Assets/img/GrProducoesWhite.png"

import { FaWhatsapp, FaInstagram } from "react-icons/fa";

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
                        <li><a href="mailto:grproducoes.rec@gmail.com" className={styles.link}>grproducoes.rec@gmail.com</a></li>
                        <li><a href="https://wa.me/5562992567382" className={styles.link}>+55 62 9 9256-7382</a></li>
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
                        href="https://wa.me/5562992567382"
                        aria-label="Whatsapp"
                        className={styles.iconLink}
                    >
                        <FaWhatsapp size={20} />
                    </a>
                    <a
                        href="https://www.instagram.com/groficial__/"
                        aria-label="Instagram"
                        className={styles.iconLink}
                    >
                        <FaInstagram size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;