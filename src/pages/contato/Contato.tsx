import React, { useEffect, useState } from "react";

import styles from "./Contato.module.css";

import Title from "../../components/common/Title";

import ContactForm from "../../components/ContactForm";
import ContactInfoItem from "../../components/ContactInfoItem";

import { MdEmail, MdLocalPhone, MdPlace } from "react-icons/md";

const Contato = () => {

    return (
        <div className={styles.contactSection}>
            <div className={styles.container}>
                <Title subTitle="Fale comigo"> CONTATO </Title>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <ContactInfoItem type="phone" icon={<MdLocalPhone />} text="5581981880305" />
                        <ContactInfoItem type="email" icon={<MdEmail />} text="teste@email.com" />
                        <ContactInfoItem type="location" icon={<MdPlace />} text="Caruaru, Pernambuco" />
                    </div>
                    <div className={styles.right}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contato;