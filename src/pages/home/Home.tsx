import React, { useEffect, useState } from "react";

import styles from "./Home.module.css";

import Title from "../../components/common/Title";


import backgroundVideoDesktop from "../../Assets/video/Video Abertura Site.mp4"
import backgroundVideoMobile from "../../Assets/video/Video Abertura Site_phone.mp4"

import Gabriel from "../../Assets/img/Gabriel.jpg"
import Thiago from "../../Assets/img/Thiago.jpg"
import Lucas from "../../Assets/img/Lucas.jpg"
import ClientCarousel from "../../components/ClientCarousel/ClientCarousel";
import WhatsappContact from "../../components/WhatsappContact/WhatsappContact";

const Home = () => {
    const [backgroundVideo, setBackgroundVideo] = useState<string>(backgroundVideoDesktop);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setBackgroundVideo(backgroundVideoMobile);
        } else {
            setBackgroundVideo(backgroundVideoDesktop);
        }
    }, []);

    return (
        <div>
            <div className={styles.backgroundVideo}>
                <video autoPlay loop muted playsInline>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
                <div className={styles.gradientBottom}></div>
            </div>
            <main className={styles.container}>
                <Title className={styles.title}>
                    Transformando <strong>momentos</strong> em <strong>histórias visuais únicas</strong>
                </Title>
                <div className={styles.section}>
                    <p className={styles.text}>Sou Gabriel Rodrigues, filmmaker com mais de cinco anos de experiência no audiovisual e especialista em moda e eventos. Minha jornada profissional é movida pela paixão em transformar histórias em imagens poderosas, capturando a essência de cada projeto com autenticidade e sofisticação.
                        <br />
                        <br />
                        Nos últimos anos, mergulhei no universo da moda, produzindo conteúdos que vão desde campanhas e editoriais até coberturas de desfiles e eventos exclusivos. Com a GR Produções, minha produtora, busco criar narrativas visuais impactantes, unindo técnica, criatividade e um olhar apurado para os detalhes.
                        <br />
                        <br />
                        Se você busca uma produção audiovisual que valorize sua marca, evento ou projeto, estou aqui para trazer sua visão à vida.
                        <br />
                        <br />
                        Vamos criar algo único?</p>
                </div>
                {/* card with name, piture and function */}
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h2>Thiago Silva</h2>
                        <img src={Thiago} alt="Gabriel Rodrigues" className={styles.photo} />
                        <p className={styles.role}>Editor | Recém casado | Só tira foto com a esposa</p>
                    </div>
                    <div className={styles.card}>
                        <h2>Gabriel Rodrigues</h2>
                        <img src={Gabriel} alt="Gabriel Rodrigues" className={styles.photo} />
                        <p className={styles.role}>Filmmaker | Fundador | Comanda a coisa toda
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h2>Lucas</h2>
                        <img src={Lucas} alt="Gabriel Rodrigues" className={styles.photo} />
                        <p className={styles.role}>Técnico | auxiliar de gravação e iluminação</p>
                    </div>
                </div>
                {/* Client logos carousel */}
                <ClientCarousel />
                <WhatsappContact message="Olá, eu vim pelo site e gostaria de conhecer melhor o seu trabalho" />
            </main>
        </div>
    )
};

export default Home;