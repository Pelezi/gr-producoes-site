import React, { useEffect, useState } from "react";

import styles from "./Home.module.css";

import Title from "../../components/common/Title";
import InfoBox from "../../components/common/InfoBox";

import giftsData from "../../db/gift.json";

import backgroundVideo from "../../Assets/video/VIDEO ABERTURA SITE .mp4"
import Gabriel from "../../Assets/img/Gabriel.jpg"
import Thiago from "../../Assets/img/Thiago.jpg"
import Lucas from "../../Assets/img/Lucas.jpeg"
import ClientCarousel from "../../components/common/ClientCarousel";

const Home = () => {
    const [gifts] = useState<any[]>(giftsData);

    return (
        <div>
            <div className={styles.backgroundVideo}>
                <video autoPlay loop muted>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
                <div className={styles.gradientBottom}></div>
            </div>
            <main className={styles.container}>
                <Title className={styles.title}>
                    Transformando <strong>momentos</strong> em <strong>histórias visuais únicas</strong>
                </Title>
                {/* <p className={styles.highlights}>Trabalhos em destaque</p>
                <p className={styles.downArrow}>▼</p>
                <div className={styles.section}>
                    {gifts.map((gift) => (
                        <InfoBox
                            key={gift.id}
                            gift={gift}
                        />
                    ))}
                </div> */}
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
                        <p className={styles.role}>Não sei quem é Lucas | Peguei a foto de um Lucas aleatório na internet</p>
                    </div>
                </div>
                {/* Client logos carousel */}
                <ClientCarousel />
            </main>
        </div>
    )
};

export default Home;