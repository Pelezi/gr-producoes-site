import React from "react";
import styles from "./WhatsappContact.module.css";
import WhatsappWhite from "../../Assets/img/whatsapp.png";

interface WhatsappContactProps {
    message: string;
}

const WhatsappContact: React.FC<WhatsappContactProps> = ({ message }) => {
    return (
        <div className={`${styles.section} ${styles.contact}`}>
            <div className={styles.contactSection}>
                <p>Vamos criar algo único?</p>
                <a
                    href={`https://wa.me/5562992567382?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactInfo}
                >
                    <img className={styles.whatsappButton} src={WhatsappWhite} alt="" />
                    <p>Fale conosco <br /> pelo Whatsapp</p>
                </a>
            </div>
        </div>
    );
};

export default WhatsappContact;
