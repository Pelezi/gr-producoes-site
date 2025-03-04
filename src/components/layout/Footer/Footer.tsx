import React, { useState, useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import styles from "./Footer.module.css";

import { FaGift, FaBars } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from "../../common/Button";

import GRProducoesWhite from "../../../Assets/img/GrProducoesWhite.png"

import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Menu: React.FC = ({ }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.topSection}>
                <a href="/" className={styles.logo}>
                    <img src={GRProducoesWhite} alt="GR Produções" className={styles.logoImage} />
                    <span className={styles.logoText}>Gr Produções</span>
                </a>
                <div className={styles.column}>
                    <h2 className={styles.columnTitle}>ABOUT</h2>
                    <ul className={styles.linkList}>
                        <li><a href="https://flowbite.com" className={styles.link}>Flowbite</a></li>
                        <li><a href="https://tailwindcss.com" className={styles.link}>Tailwind CSS</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h2 className={styles.columnTitle}>FOLLOW US</h2>
                    <ul className={styles.linkList}>
                        <li><a href="https://github.com" className={styles.link}>GitHub</a></li>
                        <li><a href="https://discord.com" className={styles.link}>Discord</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h2 className={styles.columnTitle}>LEGAL</h2>
                    <ul className={styles.linkList}>
                        <li><a href="#privacy" className={styles.link}>Privacy Policy</a></li>
                        <li><a href="#terms" className={styles.link}>Terms &amp; Conditions</a></li>
                    </ul>
                </div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.bottomSection}>
                <span className={styles.copyright}>
                    © 2025 <strong>Gr Produções</strong>
                </span>
                <span>Feito por <a href="https://github.com/Pelezi">Pelezi</a></span>
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

export default Menu;